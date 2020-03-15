using DeepBot.Core.Network;
using DeepBot.Core.Network.HubMessage;
using DeepBot.Data.Database;
using DeepBot.Data.Extensions;
using DeepBot.Data.Model;
using DeepBot.Data.Model.GameServer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SignalR;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeepBot.Core.Hubs
{
    [Authorize]
    public class DeepTalk : Hub
    {
        private static Dictionary<string, List<string>> ConnectedBot = new Dictionary<string, List<string>>();
        private readonly UserManager<UserDB> Manager;
        private string userId => Context.User.Claims.First(c => c.Type == "UserID").Value;
        private Task<UserDB> UserDB => Manager.FindByIdAsync(userId);
        private string CliID => Manager.FindByIdAsync(userId).Result.CliConnectionId;
        private RoleManager<RoleDB> RoleManager;

        public static Dictionary<string, bool> IsScans = new Dictionary<string, bool>();
        public readonly IMongoCollection<UserDB> _userCollection;

        public async Task ReceivedHandler(string package, string tcpId)
        {
            if (await IsAllowedAPI())
            {
                var CurrentUser = await UserDB;

                Receiver.Receive(this, package, CurrentUser, tcpId, _userCollection);
            }
        }

        public async Task JoinRoomCLI()
        {
            var CurrentUser = await UserDB;

            if (CurrentUser.Accounts.Count == 0)
                CurrentUser.Accounts = new List<Account>();

            ConnectedBot.TryAdd(CurrentUser.Id, new List<string>());

            CurrentUser.CliConnectionId = Context.ConnectionId;
            await _userCollection.ReplaceOneAsync(c => c.Id == CurrentUser.Id, CurrentUser);
        }

        public async Task JoinRoomClient()
        {
            if (await IsAllowedAPI())
            {
                var CurrentUser = await UserDB;
                GetConnected().Wait();
                await Groups.AddToGroupAsync(Context.ConnectionId, GetApiKey());
            }
        }

        public async Task GetTcpId(int key)
        {
            var currentUser = await UserDB;
            await Clients.Caller.SendAsync("GetCurrentTcpId", currentUser.Accounts.Find(c => c.CurrentCharacter.Key == key).TcpId);
        }

        public async Task SendLog(string log)
        {
            var ClientsWeb = Clients.OthersInGroup(GetApiKey());
            await ClientsWeb.SendAsync("ConsoleSend", log);
        }

        public async Task InitTcpCli()
        {
            await Clients.Client(CliID).SendAsync("CreateTcp");
        }

        public async Task CreateConnexion(string userName, string password, short serverId, bool isScan = false)
        {
            if (await IsAllowedAPI())
            {
                string tcpId = GetTcpId();

                var CurrentUser = await UserDB;

                if (CurrentUser.CliConnectionId == "")
                    Clients.GroupExcept(GetApiKey(), CliID).SendAsync("CLIRequiredMessage", false).Wait();
                else
                {
                    if (isScan)
                        CurrentUser
                            .Accounts.Add(new Account { TcpId = tcpId, AccountName = userName, Password = password, isScan = isScan, Server = new Server() { Id = serverId } });

                    else if (!isScan)
                    {
                        if (!string.IsNullOrEmpty(CurrentUser.CliConnectionId))
                            ConnectedBot[CurrentUser.Id].Add(tcpId);

                        GetConnected().Wait();
                        CurrentUser.Accounts.FirstOrDefault(c => c.AccountName == userName).TcpId = tcpId;
                        CurrentUser.Accounts.FirstOrDefault(c => c.AccountName == userName).isConnected = true;
                        var account = CurrentUser.Accounts.Find(c => c.AccountName == userName);
                        Clients.GroupExcept(GetApiKey(), CliID).SendAsync("UpdateCharac", account.CurrentCharacter).Wait();
                    }

                    Clients.GroupExcept(GetApiKey(), CliID).SendAsync("CLIRequiredMessage", true, CurrentUser.Accounts.Find(c => c.TcpId == tcpId).Key, CurrentUser.Accounts.FirstOrDefault(c => c.AccountName == userName).isConnected).Wait();
                    await Clients.Client(CliID).SendAsync("NewConnection", "dofus-co-retro-f9e1b368375d4153.elb.eu-west-1.amazonaws.com", 443, false, tcpId, isScan);

                    await _userCollection.ReplaceOneAsync(c => c.Id == CurrentUser.Id, CurrentUser);

                    if (isScan)
                        IsScans.Add(tcpId, isScan);
                }
            }

        }

        private string GetTcpId()
        {
            Guid tcpId = Guid.NewGuid();
            return tcpId.EncodeBase64String();
        }


        public async Task DisconnectCli(string tcpId, bool invisible)
        {
            var currentUser = await UserDB;

            if (currentUser.CliConnectionId == "")
                Clients.GroupExcept(GetApiKey(), CliID).SendAsync("CLIRequiredMessage", false).Wait();
            else
            {
                if (ConnectedBot[userId] != null)
                    ConnectedBot[userId].Remove(tcpId);

                if (!invisible)
                {
                    currentUser.Accounts.Find(c => c.TcpId == tcpId).isConnected = false;
                    currentUser.Accounts.Find(c => c.TcpId == tcpId).TcpId = "";
                    await Manager.UpdateAsync(currentUser);
                }

                Clients.GroupExcept(GetApiKey(), CliID).SendAsync("CLIRequiredMessage", true, currentUser.Accounts.Find(c => c.TcpId == tcpId).Key, currentUser.Accounts.Find(c => c.TcpId == tcpId).isConnected).Wait();
                await Clients.Client(CliID).SendAsync("Disconnect", tcpId);
            }
        }

        public async Task DispatchToClient(NetworkMessage network, string tcpId)
        {
            await Clients.GroupExcept(GetApiKey(), CliID).SendAsync("DispatchClient", network, tcpId);
        }

        #region CheckScan

        public async Task CallCheck(string tcpId)
        {
            await Clients.Client(CliID).SendAsync("CheckCliScan", tcpId);
        }

        private async Task ExitCLI()
        {
            await Clients.Client(CliID).SendAsync("Exit");
        }

        #endregion

        public async Task GetConnected()
        {
            var currentUser = await UserDB;
            await Clients.GroupExcept(GetApiKey(), CliID).SendAsync("StatusAccount", ConnectedBot[currentUser.Id]);
        }

        private string GetApiKey()
        {
            return Context.User.Claims.FirstOrDefault(c => c.Type == "ApiKey").Value;
        }

        public override async Task OnConnectedAsync()
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, GetApiKey());
        }

        public override async Task OnDisconnectedAsync(Exception exception)
        {
            var CurrentUser = await UserDB;

            if (CurrentUser.CliConnectionId == Context.ConnectionId)
            {
                ConnectedBot[CurrentUser.Id] = new List<string>();
                CurrentUser.CliConnectionId = "";
                CurrentUser.Accounts.ForEach(c => { c.TcpId = ""; c.isConnected = false; });
                await _userCollection.ReplaceOneAsync(c => c.Id == CurrentUser.Id, CurrentUser);
                await Groups.RemoveFromGroupAsync(Context.ConnectionId, GetApiKey());
            }
        }

        private async Task<bool> IsAllowedAPI()
        {
            var CurrentUser = await UserDB;

            var Roles = await Manager.GetRolesAsync(CurrentUser);

            if (CurrentUser.ApiKey.EndDate >= DateTime.Now || (Roles as List<string>).Find(role => role == "ADMINISTRATEUR") != null)
                return true;
            else
            {
                var accountsOnline = CurrentUser.Accounts.FindAll(c => c.TcpId != "").ToArray();

                for (int i = 0; i < accountsOnline.Length; i++)
                {
                    await Clients.Client(CurrentUser.CliConnectionId).SendAsync("Disconnect", accountsOnline[i].TcpId);
                    CurrentUser.Accounts.Find(c => c.Key == accountsOnline[i].Key).TcpId = "";
                }

                _userCollection.ReplaceOneAsync(c => c.Id == CurrentUser.Id, CurrentUser).Wait();

                Manager.UpdateAsync(CurrentUser).Wait();

                await ExitCLI();

                return false;
            }
        }

        public DeepTalk(UserManager<UserDB> manager, IMongoCollection<UserDB> userCollection, RoleManager<RoleDB> roleManager)
        {
            Manager = manager;
            _userCollection = userCollection;
            RoleManager = roleManager;
        }
    }
}
