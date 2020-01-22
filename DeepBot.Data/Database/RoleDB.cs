using AspNetCore.Identity.Mongo.Model;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

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
