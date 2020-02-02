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
import { HttpHeaders } from '@angular/common/http';

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
  accountCreated: Account;
  characterCreated: Character;
  hourchecked: boolean = false;

  characterList: Character[] = [
    { characterName:'Teucerius' , level:200,classe:Classe.Cra},
    { characterName: 'Dyshay', level: 200, classe: Classe.Xelor},
    { characterName: 'Pedro', level: 200, classe: Classe.Enutrof },
    { characterName: 'Netfu', level: 45, classe: Classe.Osamodas },
    { characterName: 'Gobotify', level: 3, classe: Classe.Iop },
  ];

  groupList: Group[] = [
    {
      groupName: "Farm Astrub",
      leader: { characterName: 'Teucerius', level: 200, classe: Classe.Cra },
      followers: [
        { characterName: 'Gobotify', level: 3, classe: Classe.Iop },
        { characterName: 'Netfu', level: 45, classe: Classe.Osamodas }
      ],
      groupLevel: 248,
      groupProspection: 600,
      groupId: 1 ,
      groupTotal:3
    },
    {
      groupName: "Farm pandala",
      leader: { characterName: 'Dyshay', level: 200, classe: Classe.Xelor },
      followers: [
        { characterName: 'Gobotify', level: 3, classe: Classe.Iop },
        { characterName: 'Netfu', level: 45, classe: Classe.Osamodas },
        { characterName: 'Pedro', level: 200, classe: Classe.Enutrof },
        { characterName: 'Teucerius', level: 200, classe: Classe.Cra }
      ],
      groupLevel: 248,
      groupProspection: 600,
      groupId: 2,
      groupTotal: 3
    },
    {
      groupName: "Farm tainela",
      leader: { characterName: 'Pedro', level: 200, classe: Classe.Enutrof },
      followers: [
        { characterName: 'Gobotify', level: 3, classe: Classe.Iop },
        { characterName: 'Netfu', level: 45, classe: Classe.Osamodas },
        { characterName: 'Teucerius', level: 200, classe: Classe.Cra }
      ],
      groupLevel: 248,
      groupProspection: 600,
      groupId: 2,
      groupTotal: 3
    },
  ]

  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;
  icMoreVert = icMoreVert;
    /** create-account ctor */
  constructor(private navigationService: NavigationService, private fb: FormBuilder) {

  }


  ngOnInit(): void {
    this.form = this.fb.group({
      accountName: ['', Validators.required],
      password: ['', Validators.required],
      server : ['', Validators.required],
      group: ['', Validators.required],
      character: ['', Validators.required],
    });
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
