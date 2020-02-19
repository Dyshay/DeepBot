import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import bucheron from '@iconify/icons-mdi/hand-saw';
import paysan from '@iconify/icons-whh/arrowdown'; // a modif
import mineur from '@iconify/icons-mdi/pickaxe'; 
import chasseur from '@iconify/icons-whh/bow';
import pecheur from '@iconify/icons-mdi/fish';
import alchimiste from '@iconify/icons-mdi/flower';
import bricoleur from '@iconify/icons-mdi/hammer';
import bijoutier from '@iconify/icons-mdi/ring';
import cordonnier from '@iconify/icons-mdi/shoe-formal';
import tailleur from '@iconify/icons-mdi/hat-fedora';
import sculteur from '@iconify/icons-whh/arrowdown'; // a modif
import forgeur from '@iconify/icons-whh/arrowdown'; // a modif
import forgeurbouclier from '@iconify/icons-mdi/shield';
import cordomage from '@iconify/icons-whh/arrowdown'; // a modif
import costumage from '@iconify/icons-fa-solid/hat-wizard';
import jaillomage from '@iconify/icons-map/jewelry-store';
import { Character } from '../../../../../webModel/Character';
import { Job } from '../../../../../webModel/Job';
import theme from '../../../../../@vex/utils/tailwindcss';

@Component({
    selector: 'app-job',
    templateUrl: './job.component.html',
    styleUrls: ['./job.component.scss']
})
/** job component*/
export class JobComponent implements OnInit {
  @Input() character: Character;
  jobSelected: Job;
  theme = theme;
  bucheron = bucheron;
  paysan = paysan;
  mineur = mineur;
  chasseur = chasseur;
  pecheur = pecheur;
  alchimiste = alchimiste;
  bricoleur = bricoleur;
  bijoutier = bijoutier;
  cordonnier = cordonnier;
  tailleur = tailleur;
  sculteur = sculteur;
  forgeur = forgeur;
  forgeurbouclier = forgeurbouclier;
  cordomage = cordomage;
  costumage = costumage;
  jaillomage = jaillomage;
    /** job ctor */
  constructor(private translateService: TranslateService)  {

  }

  ngOnInit() {
    //this.character.jobs = [{
    //  id:'1',
    //  level: 100,
    //  name:'Bucheron'
    //},
    //  {
    //    id: '2',
    //    level: 85,
    //    name:'Paysan'
    //  }
    //];

    //this.jobSelected = this.character.jobs[0];

  }
  selectJob(job: Job) {
    this.jobSelected = job;
  }
}
