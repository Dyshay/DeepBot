import { Component } from '@angular/core';
import { stagger80ms } from '../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { scaleIn400ms } from '../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';
import icDoneAll from '@iconify/icons-ic/twotone-done-all';
import { IA, Classe } from '../../../../webModel/IA';

@Component({
    selector: 'app-create-ia',
    templateUrl: './create-ia.component.html',
  styleUrls: ['./create-ia.component.scss'],
  animations: [
    stagger80ms,
    fadeInUp400ms,
    scaleIn400ms,
    fadeInRight400ms
  ]
})
/** create-ia component*/
export class CreateIaComponent {
  iaToCreate: IA = new IA;
  public classeEnum = Classe
  classes: Classe;
  icDoneAll = icDoneAll;
    /** create-ia ctor */
    constructor() {

    }
}
