import { Component } from '@angular/core';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { NavigationService } from '../../../../@vex/services/navigation.service';

@Component({
    selector: 'app-create-account',
    templateUrl: './create-account.component.html',
    styleUrls: ['./create-account.component.scss']
})
/** create-account component*/
export class CreateAccountComponent {

  ischaractersfound: boolean = false;

  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;
  icMoreVert = icMoreVert;
    /** create-account ctor */
  constructor(private navigationService: NavigationService) {

  }


  findCharacter() {
    this.ischaractersfound = true;
  }

  addAccount() {

    this.navigationService.addLink({
      type: 'link',
      label: 'bot 1',
      route: '/bot'
    });
  }
}
