import { EventEmitter, Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder, HttpTransportType } from '@aspnet/signalr';

@Injectable()
export class TalkService {
    messageReceived = new EventEmitter<string>();
    connectionEstablished = new EventEmitter<boolean>();

    private connectIsEstablished = false;
    private _hubConnection: HubConnection;

    constructor() {
        this.createConnection();
        // this.startConnection();
    }

    sendMessage(message: string) {
        this._hubConnection.invoke('SendPackage', message, '5000');
    }

    private createConnection(): void {
        this._hubConnection = new HubConnectionBuilder()
            .withUrl("https://localhost:44319/deeptalk",{	
                accessTokenFactory: () => {	
                    return localStorage.getItem('DeepBot');	
                }, skipNegotiation: true, transport: HttpTransportType.WebSockets	
            })
            .build();
    }

    joinRoom() {
        this._hubConnection.invoke('JoinRoomClient', '500');
    }

    sendPackage() {
        this._hubConnection.invoke('SendPackage', 'test', '500')
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
    }

    private registerOnServerEvents(): void {
        this._hubConnection.on('ConsoleSend', (data: string) => {
            this.messageReceived.emit(data);
        });
    }
}
