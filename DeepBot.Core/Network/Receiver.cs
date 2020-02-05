﻿using DeepBot.Core.Handlers;
using DeepBot.Core.Hubs;
using DeepBot.Data.Database;
using DeepBot.Data.Model;
using DeepBot.Data.Model;
using Microsoft.AspNetCore.Identity;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace DeepBot.Core.Network
{
    public static class Receiver
    {
        public static readonly List<ReceiverData> methods = new List<ReceiverData>();

        public static void Initialize()
        {
            Assembly asm = typeof(IHandler).GetTypeInfo().Assembly;

            foreach (var type in asm.GetTypes().SelectMany(x => x.GetMethods()).Where(m => m.GetCustomAttributes(typeof(ReceiverAttribute), false).Length > 0))
            {
                ReceiverAttribute attribute = type.GetCustomAttributes(typeof(ReceiverAttribute), true)[0] as ReceiverAttribute;
                Type typeValue = Type.GetType(type.DeclaringType.FullName);

                object instance = Activator.CreateInstance(typeValue, null);
                methods.Add(new ReceiverData(instance, attribute.Handler, type));
            }
        }

        public static void Receive(DeepTalk hub, string package, UserDB user , string tcpId, IMongoCollection<UserDB> Manager)
        {
            ReceiverData method = methods.Find(m => package.StartsWith(m.HandlerName));

            if (method != null)
                method.Information.Invoke(method.Instance, new object[5] { hub, package, user, tcpId, Manager });
        }
    }
}
