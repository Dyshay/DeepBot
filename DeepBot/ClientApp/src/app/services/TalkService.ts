import { EventEmitter, Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder, HttpTransportType } from '@aspnet/signalr';
import { Store } from '@ngrx/store';
import * as fromwebUser from '../app-reducers/webUser/reducers';
import { webUserActions } from '../app-reducers/webUser/actions';
import { AccountActions } from '../app-reducers/account/actions';
import * as fromAccount from '../app-reducers/account/reducers';
import * as fromCharacter from '../app-reducers/character/reducers';
import { CharacterActions } from '../app-reducers/character/actions';
@Injectable()
export class TalkService {
  messageReceived = new EventEmitter<string>();
  connectionEstablished = new EventEmitter<boolean>();

  private connectIsEstablished = false;
  private _hubConnection: HubConnection;

  constructor(private storeUser: Store<fromwebUser.State>,
    private storeAccount: Store<fromwebUser.State>,
    private storeCharacter: Store<fromCharacter.State>
  ) {
    this.createConnection();
    // this.startConnection();
  }

  sendMessage(message: string) {
    this._hubConnection.invoke('SendPackage', message, '5000');
  }

  private createConnection(): void {
    this._hubConnection = new HubConnectionBuilder()
      .withUrl("https://localhost:44319/deeptalk", {
        accessTokenFactory: () => {
          return localStorage.getItem('DeepBot');
        }, skipNegotiation: true, transport: HttpTransportType.WebSockets
      })
      .build();
  }

  createConnexionBot(accountName, accountPassword, serverId, isScan) {
    console.log(accountName);
    this._hubConnection.invoke('CreateConnexion', accountName, accountPassword, serverId, isScan);
  }

  public startConnection(): void {
    this._hubConnection
      .start()
      .then(() => {
        this.connectIsEstablished = true;
        console.log('Init connection on DeepTalk');
        this.connectionEstablished.emit(true);
      })
      .catch(err => {
        console.log('Error on initialize connection with DeepTalk, retrying...', err);
        setTimeout(function () {
          this.startConnection();
        }, 5000);
      });
    this.GetClientMessage();
  }

  private GetClientMessage(): void {
    this._hubConnection.on("DispatchClient", (network, tcpId) => {
      console.log(network);
      switch (network.type) {
        case 0:
          this.storeAccount.dispatch(AccountActions.receveidLogs({ network }));
          break;
        case 5:
          this.storeAccount.dispatch(AccountActions.receveidMaps({ network }));
          break;
        case 6:
          this.storeCharacter.dispatch(CharacterActions.receveidCharacters({ network }));
          break;
        default:
          break;
      }
    })
  }
}
