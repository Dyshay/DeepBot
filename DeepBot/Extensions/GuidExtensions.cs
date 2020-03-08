using System;
using System.Buffers.Text;
using System.Runtime.InteropServices;
using System.Text;

namespace DeepBot.Extensions
{
    public static class GuidExtensions
    {
        private const byte ForwardSlashByte = (byte)'/';
        private const byte DashByte = (byte)'-';
        private const byte PlusByte = (byte)'+';
        private const byte UnderscoreByte = (byte)'_';

        public static string EncodeBase64String(this Guid guid)
        {
            Span<byte> guidBytes = stackalloc byte[16];
            Span<byte> encodedBytes = stackalloc byte[24];

            MemoryMarshal.TryWrite(guidBytes, ref guid);
            Base64.EncodeToUtf8(guidBytes, encodedBytes, out _, out _);

            for (var i = 0; i < 22; i++)
            {
                if (encodedBytes[i] == ForwardSlashByte)
                    encodedBytes[i] = DashByte;

                if (encodedBytes[i] == PlusByte)
                    encodedBytes[i] = UnderscoreByte;
            }

            var final = Encoding.UTF8.GetString(encodedBytes.Slice(0, 22));

            return final;
        }
    }
}
