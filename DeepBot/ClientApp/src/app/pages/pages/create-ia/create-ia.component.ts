import { Component } from '@angular/core';
import { stagger80ms } from '../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { scaleIn400ms } from '../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';
import icDoneAll from '@iconify/icons-ic/twotone-done-all';
import icPlus from '@iconify/icons-ic/baseline-add';
import { IA, Classe, TypeIA, Target } from '../../../../webModel/IA';
import { IaService } from '../../../services/ia.service';
import { SortCra, SortFeca, SortOsamodas, SortEnutrof, SortSram, SortXelor, SortEcaflip, SortEniripsa, SortIop, SortSadida, SortSacrieur, SortPandawa } from '../../../../webModel/Enum/SpellBreed';
import { Key } from 'protractor';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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
  classeEnum = Classe
  typeIA = TypeIA;
  target = Target;
  sortCra = SortCra;
  sortFeca = SortFeca;
  sortOsamodas = SortOsamodas;
  sortEnutrof = SortEnutrof;
  sortSram = SortSram;
  sortXelor = SortXelor;
  sortEcaflip = SortEcaflip;
  sortEniripsa = SortEniripsa;
  sortIop = SortIop;
  sortSadida = SortSadida;
  sortSacrieur = SortSacrieur;
  sortPandawa = SortPandawa;
  spellChoosed: string;
  icDoneAll = icDoneAll;
  icPlus = icPlus;

  timePeriods = [
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Early modern period',
    'Long nineteenth century'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  }
    /** create-ia ctor */
    constructor(private iaService:IaService) {

  }

  createIAInService() {
    console.log(this.iaToCreate);
    this.iaService.ia = this.iaToCreate;
  }


  addSpell() {
    this.iaService.spellToAdd.spellName = this.iaService.spellToAdd.spellId.toString();
    switch (this.iaService.ia.classe.toString()) {
      case 'Cra':
        this.iaService.spellToAdd.spellId = parseInt(SortCra[this.iaService.spellToAdd.spellId]);        
        break;
      case 'Féca':
        this.iaService.spellToAdd.spellId = parseInt(SortFeca[this.iaService.spellToAdd.spellId]);
        break;
      case 'Osamodas':
        this.iaService.spellToAdd.spellId = parseInt(SortOsamodas[this.iaService.spellToAdd.spellId]);
        break;
      case 'Enutrof':
        this.iaService.spellToAdd.spellId = parseInt(SortEnutrof[this.iaService.spellToAdd.spellId]);
        break;
      case 'Sram':
        this.iaService.spellToAdd.spellId = parseInt(SortSram[this.iaService.spellToAdd.spellId]);
        break;
      case 'Xélor':
        this.iaService.spellToAdd.spellId = parseInt(SortXelor[this.iaService.spellToAdd.spellId]);
        break;
      case 'Ecaflip':
        this.iaService.spellToAdd.spellId = parseInt(SortEcaflip[this.iaService.spellToAdd.spellId]);
        break;
      case 'Eniripsa':
        this.iaService.spellToAdd.spellId = parseInt(SortEniripsa[this.iaService.spellToAdd.spellId]);
        break;
      case 'Iop':
        this.iaService.spellToAdd.spellId = parseInt(SortIop[this.iaService.spellToAdd.spellId]);
        break;
      case 'Sadida':
        this.iaService.spellToAdd.spellId = parseInt(SortSadida[this.iaService.spellToAdd.spellId]);
        break;
      case 'Sacrieur':
        this.iaService.spellToAdd.spellId = parseInt(SortSacrieur[this.iaService.spellToAdd.spellId]);
        break;
      case 'Pandawa':
        this.iaService.spellToAdd.spellId = parseInt(SortPandawa[this.iaService.spellToAdd.spellId]);
        break;
      default:
    }

    if (this.iaService.ia.actions == null)
      this.iaService.ia.actions = [];
    var priority = this.iaService.ia.actions.length + 1;
    this.iaService.spellToAdd.priority = priority;
    this.iaService.addSpellToIa();

  }  
}
