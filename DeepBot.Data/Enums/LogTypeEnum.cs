using System.ComponentModel;

namespace DeepBot.Data.Enums
{
    public enum LogTypeEnum
    {
        SYSTEM_INFORMATION = '1',
        SYSTEM_ERROR = '2',
        SYSTEM_DEBUG = '3',
        GAME_INFORMATION = 'i',
        GAME_PRIVATE_SEND = 'T',
        GAME_PRIVATE_RECEIVE = 'F',
        GAME_GENERAL = '*',
        GAME_GUILD = '%',
        GAME_RECRUITMENT = '?',
        GAME_TRADING = ':',
        GAME_INCARNAM = '^',
        GAME_TEAM = '#',
        GAME_GROUP = '$',
        GAME_ADMIN = '@',
    }
}
