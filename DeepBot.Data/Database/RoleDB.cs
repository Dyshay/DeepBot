using AspNetCore.Identity.MongoDbCore.Models;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;
using MongoDbGenericRepository.Attributes;
using System;


namespace DeepBot.Data.Database
{
	[CollectionName("Roles")]
	public class RoleDB : MongoIdentityRole<Guid>
    {
		public RoleDB() : base()
		{
		}

		public RoleDB(string roleName) : base(roleName)
		{
		}

		[BsonId(IdGenerator = typeof(CombGuidGenerator))]
		public Guid RoleId { get; set; }
	}
}
