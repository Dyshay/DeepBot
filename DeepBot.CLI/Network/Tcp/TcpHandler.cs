﻿using DeepBot.CLI.Model;
using DeepBot.CLI.Network.Packages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace DeepBot.CLI.Network.Tcp
{
    public class TcpHandler
    {
        private Socket Socket { get; set; }
        private byte[] Buffer { get; set; }
        private short TcpId { get; set; }
        private SemaphoreSlim Semaphore { get; set; }

        public event Action<string> PacketReceivedEvent;
        public event Action<string> PacketSendEvent;

        private bool Disposed;
        private Account Account;

        public TcpHandler(Account account, short tcpId)
        {
            Account = account;
            TcpId = tcpId;
        }

        public void SendPackage(string package, bool needResponse = false)
        //=> SendPacketAsync(package, needResponse).Wait();
        {
                Console.WriteLine(package);
        }

        public void Connect(string IP, int port)
        {

            try
            {
                Socket = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);
                Buffer = new byte[Socket.ReceiveBufferSize];
                Semaphore = new SemaphoreSlim(1);
                ///TODO ADD PROXY SOCKS
                Socket.BeginConnect(IPAddress.Parse(IP), port, new AsyncCallback(ConnectCallback), Socket);
                //return Socket;
            }
            catch (Exception ex)
            {
                Disconnect();
                //Account.Logger.Error("Socket erreur : " + ex.ToString());
            }
        }

        private void ConnectCallback(IAsyncResult result)
        {
            try
            {
                if (IsConnected())
                {
                    Socket = result.AsyncState as Socket;
                    Socket.EndConnect(result);
                    Socket.BeginReceive(Buffer, 0, Buffer.Length, SocketFlags.None, new AsyncCallback(ReceptionCallBack), Socket);
                    //Account.Logger.Info("Socket connecté correctement");
                }
                else
                {
                    Disconnect();
                    //Account.Logger.Error("Impossible de joindre le serveur hôte");
                }
            }
            catch (Exception ex)
            {
                Disconnect();
                //Account.Logger.Error("Socket erreur : " + ex.ToString());
            }
        }

        public void ReceptionCallBack(IAsyncResult result)
        {
            if (!IsConnected() || Disposed)
            {
                return;
            }

            int bytes_read = Socket.EndReceive(result, out SocketError reply);

            if (bytes_read > 0 && reply == SocketError.Success)
            {
                string datas = Encoding.UTF8.GetString(Buffer, 0, bytes_read);

                foreach (var packet in datas.Replace("\x0a", string.Empty).Split('\0').Where(x => x != string.Empty))
                {
                    PacketReceivedEvent?.Invoke(packet);
                    PackageReceiver.Receive(packet, Account, TcpId);
                }

                if (IsConnected())
                    Socket.BeginReceive(Buffer, 0, Buffer.Length, SocketFlags.None, new AsyncCallback(ReceptionCallBack), Socket);
            }
            else
                Disconnect();

        }

        public async Task SendPacketAsync(string packet, bool needResponse)
        {
            try
            {
                if (!IsConnected())
                    return;

                packet += "\n\x00";
                byte[] byte_Package = Encoding.UTF8.GetBytes(packet);

                await Semaphore.WaitAsync().ConfigureAwait(false);

                Socket.Send(byte_Package);

                PacketSendEvent?.Invoke(packet);
                Semaphore.Release();
            }
            catch (Exception)
            {
                Disconnect();
            }
        }

        public bool IsConnected()
        {
            return !(Disposed || Socket == null || !Socket.Connected && Socket.Available == 0);
        }

        public void Disconnect()
        {
            if (IsConnected())
            {
                if (Socket != null && Socket.Connected)
                {
                    Socket.Shutdown(SocketShutdown.Both);
                    Socket.Disconnect(false);
                    Socket.Close();
                }
            }
        }

        public void Dispose()
        {
            if (!Disposed)
            {
                if (Socket != null && Socket.Connected)
                {
                    Socket.Shutdown(SocketShutdown.Both);
                    Socket.Disconnect(false);
                    Socket.Close();
                }

                Socket.Dispose();
                Semaphore.Dispose();

                Semaphore = null;
                Socket = null;
                Buffer = null;
                Disposed = true;
            }
        }
    }
}