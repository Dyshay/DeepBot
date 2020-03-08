using AspNetCore.Identity.Mongo.Model;

namespace DeepBot.Data.Database
{
    public class RoleDB : MongoRole
    {
        //public ObjectId _id { get; set; }

        public RoleDB()
        {
        }

        public RoleDB(string name)
        {
            Name = name;
            NormalizedName = name.ToUpperInvariant();
        }

        public override string ToString()
        {
            return Name;
        }
    }
}
