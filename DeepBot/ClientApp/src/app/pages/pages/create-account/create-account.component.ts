import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
import { CharacterActions } from 'src/app/app-reducers/character/actions';
import { AccountActions } from 'src/app/app-reducers/account/actions';
import { webUserActions } from 'src/app/app-reducers/webUser/actions';
import { Store, select } from '@ngrx/store';
import * as fromcharacter from 'src/app/app-reducers/character/reducers';
import * as fromgroup from 'src/app/app-reducers/group/reducers';
import * as fromaccount from 'src/app/app-reducers/account/reducers';
import * as fromWeb from 'src/app/app-reducers/webUser/reducers';
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
  charaters$ = this.storeCharacter.pipe(select(fromcharacter.getScanCharacters));
  groups$ = this.storeGroup.pipe(select(fromgroup.getAllGroups));

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
  inputType = 'password';
  visible = false;

  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;
  icMoreVert = icMoreVert;
    /** create-account ctor */
  constructor(private navigationService: NavigationService, private cd: ChangeDetectorRef, private fb: FormBuilder,
    private accountService: AccountService, private http: HttpClient, private deeptalk: TalkService,
    private storeWeb : Store<fromWeb.State>,
    private storeCharacter: Store<fromcharacter.State>,
    private storeGroup: Store<fromgroup.State>,
    private storeAccount: Store<fromaccount.State>,) {

  }

  getLevelGroup(leader: Character, followers: Character[]) {
    let level = leader.level;
    for (var i = 0; i < followers.length; i++) {
      level += followers[i].level;
    }
    return level;
  }


  ngOnInit(): void {
    this.form = this.fb.group({
      accountName: [, Validators.required],
      password: ['', Validators.required],
      server : ['', Validators.required], 
      group:null,
      character: ['', Validators.required]
    });

   // Apelle de la groupList sur serv



  }
  


  findCharacter() {
    this.deeptalk.createConnexionBot(this.form.controls["accountName"].value, this.form.controls["password"].value, this.form.controls["server"].value, true);
    this.charaters$ = this.storeCharacter.pipe(select(fromcharacter.getScanCharacters));
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
      if (this.form.controls["group"].value != null)
          this.storeCharacter.dispatch(CharacterActions.updateCharacterFKGroup({ fk_Group: this.form.controls["group"].value, key: this.form.controls["character"].value }));

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
      let accountCreated = this.accountToCreate;
      this.storeAccount.dispatch(AccountActions.createAccount({ acc: { accountName: accountCreated.accountName, currentCharacterId: accountCreated.currentCharacter.key }}));
      this.storeCharacter.dispatch(CharacterActions.resetReceveidCharacters());
      this.charaters$ = this.storeCharacter.pipe(select(fromcharacter.getScanCharacters));
    };
    
   this.storeWeb.dispatch(webUserActions.getBotNav());
  }

  validateCredential() {
    //check account non existant en base
    return true;
  }
  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }

  setCharacters(): any {
    this.storeCharacter.dispatch(CharacterActions.updateCharacterFKGroup({ fk_Group: this.form.controls["group"].value, key: this.form.controls["character"].value }));
  }
}
