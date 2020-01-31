import { Component, OnInit } from '@angular/core';
import icDoneAll from '@iconify/icons-ic/twotone-done-all';
import { stagger80ms } from '../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { scaleIn400ms } from '../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Character } from '../../../../webModel/Character';
import { Classe } from '../../../../webModel/Enum/Classe';

@Component({
    selector: 'app-create-group',
    templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss'],
  animations: [
    stagger80ms,
    fadeInUp400ms,
    scaleIn400ms,
    fadeInRight400ms
  ]
})
/** create-group component*/
export class CreateGroupComponent implements OnInit {
  groupstep1: FormGroup;
  groupstep2: FormGroup;
  groupstep3: FormGroup;
  icDoneAll = icDoneAll;
  phonePrefixOptions = ['+1', '+27', '+44', '+49', '+61', '+91'];
  characterList: Character[] = [
    { characterName: 'Teucerius', level: 200, classe: Classe.Cra },
    { characterName: 'Dyshay', level: 200, classe: Classe.Xelor },
    { characterName: 'Pedro', level: 200, classe: Classe.Enutrof },
    { characterName: 'Netfu', level: 45, classe: Classe.Osamodas },
    { characterName: 'Gobotify', level: 3, classe: Classe.Iop },
  ];
    /** create-group ctor */
  constructor(private fb: FormBuilder) {

  }
  ngOnInit() {
    this.groupstep1 = this.fb.group({
      groupName: [null, Validators.required],
      startHour: [null, Validators.max(23)],
      endHour: [null, Validators.max(23)],
      trajet: [],
    });
    this.groupstep2 = this.fb.group({
      leader: [null, Validators.required]
    });

    this.groupstep3 = this.fb.group({
      membres: []
    });
  }

}
