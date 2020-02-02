import { EventEmitter, Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder, HttpTransportType } from '@aspnet/signalr';
import { Store } from '@ngrx/store';
import * as fromBot from '../pages/pages/bot/reducers';
import { BotActions } from '../pages/pages/bot/actions';

@Injectable()
export class TalkService {
    messageReceived = new EventEmitter<string>();
    connectionEstablished = new EventEmitter<boolean>();

    private connectIsEstablished = false;
    private _hubConnection: HubConnection;

    constructor(private store: Store<fromBot.State>) {
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

    createConnexionBot(accountName, accountPassword) {
        console.log(accountName);
        this._hubConnection.invoke('CreateConnexion', accountName, accountPassword);
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

    private registerOnServerEvents(): void {
        this._hubConnection.on('ConsoleSend', (data: string) => {
            this.messageReceived.emit(data);
        });
    }

    private GetClientMessage(): void {
        this._hubConnection.on("DispatchClient", (network, tcpId) => {
            // if()
            this.store.dispatch(BotActions.receveidLogs({ network }))
        })
    }
}
