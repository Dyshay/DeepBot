import { Character } from './Character'
import { Proxy } from './Proxy';
import { ConfigAccount } from './ConfigAccount';
import { AccountState } from './Enum/AccountState';
import { Server } from './Server';

export class Account {
  id: string;
  characters: Character[];
  proxy: Proxy;
  config: ConfigAccount;
  accountName: string;
  password: string;
  endAnakamaSubscribe: Date;
  ankamaPseudo: string;
  isBan: boolean;
  expirationDateBan: Date;
  nickName: string;
  serverId: number;
  welcomeKey: string;
  ankamaNickName: string;
  gameTicket: string;
  state: AccountState;
  server: Server;
}
