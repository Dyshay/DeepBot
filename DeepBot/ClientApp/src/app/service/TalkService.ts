import { EventEmitter, Injectable } from '@angular/core';
import * as signalr from '@aspnet/signalr';
import * as fromAuth from '../Component/auth/reducers';

@Injectable()
export class TalkService {
    messageReceived = new EventEmitter<string>();
    connectionEstablished = new EventEmitter<boolean>();

    private connectIsEstablished = false;
    private _hubConnection: signalr.HubConnection;

    constructor(private store: Store<fromAuth.State>) {
        this.createConnection();
        this.InitGetData();
        // this.startConnection();
        // this.joinRoom();
        // this.initNewTcp();

    }

    sendMessage(message: string) {
        this._hubConnection.invoke('SendPackage', message, '5000');
    }

    private createConnection(): void {
        this._hubConnection = new signalr.HubConnectionBuilder()
            .withUrl("https://localhost:44319/deeptalk", {
                accessTokenFactory: () => {
                    return localStorage.getItem('DeepBot');
                }, skipNegotiation: true, transport: signalr.HttpTransportType.WebSockets
            })

            .build();
    }

    joinRoom() {
        console.log('passe bien ici')
        this._hubConnection.invoke('JoinRoomClient');
    }

    sendPackage() {
        this._hubConnection.invoke('SendPackage', 'test', '500')
    }

    initNewTcp() {
        this._hubConnection.invoke('InitTcpCli')
    }

    InitGetData() {
        this._hubConnection.on('DispatchClient', (type: string, value: any) => {
            switch (type) {
                case "LOG":

                    break;

                default:
                    break;
            }
        });
    }

    callAuth() {
        this._hubConnection.invoke('CreateConnexion');
    }

    startConnection(): void {
        this._hubConnection
            .start()
            .then(() => {
                this.connectIsEstablished = true;
                console.log('Init connection on DeepTalk');
                this.connectionEstablished.emit(true);
                this._hubConnection.invoke('JoinRoomClient');
            })
            .catch(err => {
                co nsole.log('Error on initialize connection with DeepTalk, retrying...');
                setTimeout(function () {
                    this.startConnection();
                }, 5000);
            });
    }
}
