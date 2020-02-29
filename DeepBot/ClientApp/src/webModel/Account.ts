import { Character } from './Character'
import { Proxy } from './Proxy';
import { ConfigAccount } from './ConfigAccount';
import { AccountState } from './Enum/AccountState';
import { Server } from './Server';

export class Account {
  key: string;
  characters: Character[];
  currentCharacter: Character;
  proxy?: Proxy | null;
  config?: ConfigAccount;
  creationDate?: Date;
  endAnakamaSubscribe?: Date | null;
  ankamaPseudo?: string;
  isBan: boolean;
  expirationDateBan?: Date;
  nickName?: string | null;
  accountName: string;
  password: string;
  serverId: number;
  welcomeKey?: string | null;
  AnkamaNickName?: string | null;
  gameTicket?: string | null;
  tcpId?: string;
  state: AccountState;
  server?: Server | null;
}

export class CreateAccount {
  accountName: string;
  password: string;
}
