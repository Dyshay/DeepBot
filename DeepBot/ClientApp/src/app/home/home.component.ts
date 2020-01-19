import { Component } from '@angular/core';
import { TalkService } from '../service/TalkService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

    txtMessage: string = '';

    constructor(private TalkService: TalkService) {
      TalkService.joinRoom();
    }

    sendMessage(): void {
        this.TalkService.sendMessage(this.txtMessage);
    }

    sendPackage(): void {
        this.TalkService.sendPackage();
    }
}
