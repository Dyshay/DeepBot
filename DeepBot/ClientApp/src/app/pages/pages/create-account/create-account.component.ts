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
import { Account } from '../../../../webModel/Account';
import { AccountState } from '../../../../webModel/Enum/AccountState';
import { AccountService } from '../auth/services/account.service';
import { environment } from '../../../../environments/environment';
import { TalkService } from 'src/app/Services/TalkService';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};




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
  accountCreated: Account = new Account();
  characterCreated: Character;
  hourchecked: boolean = false;

  characterList: Character[] = [{
    name: "Dyshay",
    level: 200,
    breedId: Classe.Cra,
    id: 1,
    sex: 0
  },
    {
      name: "Pedro",
      level: 200,
      breedId: Classe.Enutrof,
      id: 2,
      sex: 0
    },
    {
      name: "Teucerius",
      level: 200,
      breedId: Classe.Xelor,
      id: 3,
      sex: 0
    }
  ];
   
  groupList: Group[] = [
    {
      description: 'groupe1 description',
      id: '331d2016-41ec-4e84-af17-46ce3c1007c7',
      name: 'groupe1',
      fk_Leader: this.characterList[0].id,
      fk_Followers: [this.characterList[2].id],
      leader: this.characterList[0],
      followers: [this.characterList[2]],
      prospection: 1500,
      level: this.getLevelGroup(this.characterList[1], [this.characterList[2]])
    },
    {
      description: 'groupe2 description',
      id: 'f0e2bf1e-0113-4289-bdbc-bc35f7ae04a0',
      name: 'groupe2',
      fk_Leader: this.characterList[0].id,
      fk_Followers: [this.characterList[1].id, this.characterList[2].id],
      leader: this.characterList[0],
      followers: [this.characterList[1], this.characterList[2]],
      prospection: 1501,
      level: this.getLevelGroup(this.characterList[1], [this.characterList[0], this.characterList[2]])
    },
    {
      description: 'groupe3 description',
      id: '47307984-4573-4ec9-b3cd-47457b80931f',
      name: 'groupe3',
      fk_Leader: this.characterList[1].id,
      fk_Followers: [this.characterList[0].id, this.characterList[2].id],
      leader: this.characterList[1],
      followers: [this.characterList[0], this.characterList[2]],
      prospection: 1502,
      level: this.getLevelGroup(this.characterList[1], [this.characterList[0], this.characterList[2]])
    }
   
  ]
  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;
  icMoreVert = icMoreVert;
    /** create-account ctor */
  constructor(private navigationService: NavigationService, private fb: FormBuilder, private accountService: AccountService, private http: HttpClient, private deeptalk: TalkService) {

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
      group: ['', Validators.required],
      character: ['', Validators.required]
    });

   // Apelle de la groupList sur serv

  }
  


  findCharacter() {
       // Apelle de la liste des perso sur le serv au client et renseigné les infos ci dessous
    this.accountCreated.ankamaPseudo = "";
    this.accountCreated.endAnakamaSubscribe = new Date();
    this.deeptalk.createConnexionBot(this.form.controls["accountName"].value, this.form.controls["password"].value);

    this.ischaractersfound = true;

  }

  addAccount() {
    
    if (this.validateCredential())
    {
      this.accountCreated.accountName = this.form.controls["accountName"].value;
      this.accountCreated.characters = this.characterList;
      this.accountCreated.currentCharacter = this.form.controls["character"].value as Character;
      this.accountCreated.currentCharacter.fk_Group = this.form.controls["group"].value;
      this.accountCreated.password = this.form.controls["password"].value;
      
      let body = JSON.stringify(this.accountCreated);
      this.http.post<Account>(`${environment.apiURL}Account/CreateAccount`, body, httpOptions).subscribe(
        (result: any) => {
          console.log(result);
        },
        (err) => { }
      );
     // this.accountService.createAccount(this.accountCreated);
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
}
