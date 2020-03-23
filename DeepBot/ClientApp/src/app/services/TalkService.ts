import { EventEmitter, Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder, HttpTransportType } from '@aspnet/signalr';
import { Store } from '@ngrx/store';
import * as fromwebUser from '../app-reducers/webUser/reducers';
import { webUserActions } from '../app-reducers/webUser/actions';
import { AccountActions } from '../app-reducers/account/actions';
import * as fromAccount from '../app-reducers/account/reducers';
import * as fromCharacter from '../app-reducers/character/reducers';
import { CharacterActions } from '../app-reducers/character/actions';
import { Character } from 'src/webModel/Character';
import { Account } from 'src/webModel/Account';
import { ToastrService } from 'ngx-toastr';
@Injectable()
export class TalkService {
  messageReceived = new EventEmitter<string>();
  connectionEstablished = new EventEmitter<boolean>();

  private connectIsEstablished = false;
  private _hubConnection: HubConnection;

  constructor(private storeUser: Store<fromwebUser.State>,
    private storeAccount: Store<fromwebUser.State>,
    private storeCharacter: Store<fromCharacter.State>,
    private toastr: ToastrService
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
    this._hubConnection.invoke('CreateConnexion', accountName, accountPassword, serverId, isScan);
  }

  requestDisconnect(account: Account){
    this._hubConnection.invoke('DisconnectCLI', account.tcpId, false);
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
    this.GetConnected();
    this.GetChangeCurrentUser();
    this.GetTcpId();
    this.GetStatusMessage();
  }

  public FetchTcpId(key: number): void{
    this._hubConnection.invoke("GetTcpId", key);
  }

  private GetTcpId(){
    this._hubConnection.on("GetCurrentTcpId", (tcpId: string) => {
      this.storeCharacter.dispatch(CharacterActions.updateTcpClient({tcpId}));
    })
  }

  private GetClientMessage(): void {
    this._hubConnection.on("DispatchClient", (network, tcpId) => {
      switch (network.type) {
        case 0:
          this.storeCharacter.dispatch(CharacterActions.getLogs({logs: network}))
          // this.storeAccount.dispatch(AccountActions.receveidLogs({ network }));
          break;
        case 5:
          this.storeAccount.dispatch(AccountActions.receveidMaps({ network }));
          break;
        case 6:
          this.storeCharacter.dispatch(CharacterActions.receveidCharacters({ network }));
          break;
        case 7:
          this.storeCharacter.dispatch(CharacterActions.receivedCharacteristic({ network }));
          break;
        default:
          break;
      }
    })
  }

  private GetConnected(): void{
    this._hubConnection.on("StatusAccount", (accounts) => {
      this.storeUser.dispatch(webUserActions.getConnectedBot(accounts));
    })
  }
  private GetChangeCurrentUser():void{
    this._hubConnection.on("UpdateCharac", (character : Character, tcpId: string) => {
      this.storeUser.dispatch(webUserActions.getBotNav());
      this.storeCharacter.dispatch(CharacterActions.updateAccountCharacter({ character, tcpId}));
    })
  }

  private GetStatusMessage(): void{
    this._hubConnection.on("CLIRequiredMessage", (isConnectedCLI, id, isConnectedAcc, isScan) => {
      if (isConnectedCLI) {
        if (!isScan) {
          this.storeAccount.dispatch(AccountActions.updateConnectedStatus({ id, isConnected: isConnectedAcc }));
        }
      }
      else{
        this.toastr.error("", "Veuillez lancé le programme pour effectuer des actions")
      }
    })
  }
}
