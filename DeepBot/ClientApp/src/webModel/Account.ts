import { Character } from './Character'
import { Proxy } from './Proxy';
import { ConfigAccount } from './ConfigAccount';
import { AccountState } from './Enum/AccountState';
import { Server } from './Server';

export class Account {
  key: string;
  characters: Character[];
  currentCharacter: Character;
  proxy?: Proxy;
  config?: ConfigAccount;
  creationDate?: Date;
  endAnakamaSubscribe?: Date;
  ankamaPseudo?: string;
  isBan: boolean;
  expirationDateBan?: Date;
  nickName?: string;
  accountName: string;
  password: string;
  serverId: number;
  welcomeKey?: string;
  AnkamaNickName?: string;
  gameTicket?: string;
  state: AccountState;
  server?: Server;
}

export class CreateAccount {
  accountName: string;
  password: string;
}
