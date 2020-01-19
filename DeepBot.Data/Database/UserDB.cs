using DeepBot.Data.Driver;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;


namespace DeepBot.Data.Database
{
    public class UserDB : Document<int>
    {
        public List<Guid> AccountsId { get; set; }
        public int MaxAccount { get; set; } /* type d'abonnement => 8 accounts max de base */ 
        public TimeSpan ConnectedHour { get; set; } /* total temps de connection sur site */
        public bool IsSubcriber { get; set; } /* sa clé est active ? */ 
        public DateTime EndDateSubscribe { get; set; } /* fin date clé active */ 
        public string Pseudo { get; set; } /* pseudo à la anakama*/ 
        public string ApiKey { get; set; } /* clé api d'identification*/
        public string AddressIP { get; set; }
        public short AppCliOnline { get; set; }
        [BsonIgnore]
        public string CliConnectionId { get; set; }
        [BsonIgnore]
        public List<AccountDB> Accounts { get; set; } /*List account de cet User */

        /*Stats global du user */
        public Int64 UserKamas { get; set; }
        public int Userlevel { get; set; }

    }
}
