using System;
using System.Collections.Generic;
using System.Text;

namespace DeepBot.Data.Generic
{
    public abstract class Singleton<T>
        where T : class, new()
    {
        public static T Instance
        {
            get
            {
                return SingletonAllocator.instance;
            }
        }

        internal static class SingletonAllocator
        {
            internal static T instance;

            static SingletonAllocator()
            {
                instance = new T();
            }
        }
    }
}
