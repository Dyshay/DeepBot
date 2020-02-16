import { Component, OnInit } from '@angular/core';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { NavigationService } from '../../../../@vex/services/navigation.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Character } from '../../../../webModel/Character';
import { Classe } from '../../../../webModel/Enum/Classe';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { Group } from '../../../../webModel/Group';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Account, CreateAccount } from '../../../../webModel/Account';
import { AccountState } from '../../../../webModel/Enum/AccountState';
import { environment } from '../../../../environments/environment';
import { TalkService } from 'src/app/Services/TalkService';
import { BotActions } from '../bot/actions';
import { Store, select } from '@ngrx/store';
import * as fromBot from '../bot/reducers';
import { AccountService } from '../../../services/account.service';
import { error } from '@angular/compiler/src/util';
import { Observable } from 'rxjs';
import { Server } from '../../../../webModel/Server';
import { ServerState } from '../../../../webModel/Enum/ServerState';




@Component({
    selector: 'app-create-account',
    templateUrl: './create-account.component.html',
    styleUrls: ['./create-account.component.scss'],
    animations: [
      fadeInUp400ms
    ]
})
/** create-account component*/
export class CreateAccountComponent implements OnInit{

  form: FormGroup;
  ischaractersfound: boolean = false;
  isformValid: boolean = false;
  accountToCreate: Account = new Account();
  accountToCheck: Account = new Account();
  characterCreated: Character;
  charaters$ = this.store.pipe(select(fromBot.getScanCharacters));
  groups$ = this.store.pipe(select(fromBot.getAllGroups));
  hourchecked: boolean = false;
  serverList: { id: number, name:string}[]=[
    { id: 609, name: 'Bilby' },
    { id: 601, name: 'Eratz' },
    { id: 602, name: 'Henual' },
    { id: 604, name: 'Arty' },
    { id: 605, name: 'Algathe' },
    { id: 606, name: 'Hogmeiser' },
    { id: 607, name: 'Droupik' },
    { id: 608, name: 'Ayuto' },
    { id: 610, name: 'Clustus' },
    { id: 611, name: 'Issering' },
  ]
  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;
  icMoreVert = icMoreVert;
    /** create-account ctor */
  constructor(private navigationService: NavigationService, private fb: FormBuilder, private accountService: AccountService, private http: HttpClient, private deeptalk: TalkService, private store: Store<fromBot.State>) {

  }

  getLevelGroup(leader: Character, followers: Character[]) {
    let level = leader.level;
    for (var i = 0; i < followers.length; i++) {
      level += followers[i].level;
    }
    return level;
  }


  ngOnInit(): void {

    this.store.dispatch(BotActions.getAllGroups());

    this.form = this.fb.group({
      accountName: [, Validators.required],
      password: ['', Validators.required],
      server : ['', Validators.required], 
      group: [Group,null],
      character: [Character, Validators.required]
    });

   // Apelle de la groupList sur serv



  }
  


  findCharacter() {
       // Apelle de la liste des perso sur le serv au client et renseigné les infos ci dessous
    this.deeptalk.createConnexionBot(this.form.controls["accountName"].value, this.form.controls["password"].value, this.form.controls["server"].value, true);
    this.ischaractersfound = true;
   

  }

 async addAccount() {
    
    if (this.validateCredential())
    {
      this.charaters$.subscribe(
        (result) => {
          this.accountToCreate.characters = result;
        }
      );

      this.store.dispatch(BotActions.updateCharacterFKGroup({ fk_group: this.form.controls["group"].value, key: this.form.controls["character"].value }));

      this.charaters$.subscribe(
        (result) => {
          this.accountToCreate.currentCharacter = result.find(o => o.key == this.form.controls["character"].value);
        }
      );
      this.accountToCreate.accountName = this.form.controls["accountName"].value;
      this.accountToCreate.password = this.form.controls["password"].value;


      this.accountToCreate.state = AccountState.DISCONNECTED;
      this.accountToCreate.serverId = this.form.controls["server"].value;
      this.accountToCreate.isBan = false;
      let account = this.accountToCreate;
      this.store.dispatch(BotActions.createAccount({ account  }));
    };
    
    this.navigationService.addLink({
      type: 'link',
      label: 'bot 1',
      route: '/bot'
    });
  }

  validateCredential() {
    //check account non existant en base
    return true;
  }

  setCharacters(): any {

    this.store.dispatch(BotActions.updateCharacterFKGroup({ fk_group: this.form.controls["group"].value, key: this.form.controls["character"].value }));


  }
}
