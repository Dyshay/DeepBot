import { Component, ViewChild } from '@angular/core';
import { stagger80ms } from '../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { scaleIn400ms } from '../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';
import icDoneAll from '@iconify/icons-ic/twotone-done-all';
import icPlus from '@iconify/icons-ic/baseline-add';
import { IA, Classe, TypeIA, Target, SpellAction, ConditionalAction } from '../../../../webModel/IA';
import { IaService } from '../../../services/ia.service';
import { SortCra, SortFeca, SortOsamodas, SortEnutrof, SortSram, SortXelor, SortEcaflip, SortEniripsa, SortIop, SortSadida, SortSacrieur, SortPandawa } from '../../../../webModel/Enum/SpellBreed';
import { Key } from 'protractor';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DialogAddConditionComponent } from './dialog-add-condition/dialog-add-condition.component';
import { MatDialog, MatMenuTrigger } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import icDelete from '@iconify/icons-fa-solid/trash';

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
  icDelete = icDelete;
  rightClickPos: string;
  @ViewChild(MatMenuTrigger, { static: false }) contextMenuZone: MatMenuTrigger;
  contextMenuPosition = { x: '0px', y: '0px' };
  conditionToUpdate: ConditionalAction;
  actionPrioToUpdate: number;

  dropSpell(event: CdkDragDrop<SpellAction[]>) {
    console.log(event);
    moveItemInArray(this.iaService.ia.actions, event.previousIndex, event.currentIndex)

    for (var i = 0; i < this.iaService.ia.actions.length; i++) {
      this.iaService.ia.actions[i].priority = i+1;
    }
  }
    /** create-ia ctor */
  constructor(private iaService: IaService, private translateService: TranslateService, public dialog: MatDialog) {

  }


  onContextMenu(event, condition,actionprio) {
    this.conditionToUpdate = condition;
    this.actionPrioToUpdate = actionprio;
    this.rightClickPos = event.target.alt;
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';

    this.contextMenuZone.menu.focusFirstItem('mouse');
    this.contextMenuZone.openMenu();

  }
  onContextMenuActionDeleteCondition() {
    var index = this.iaService.ia.actions.findIndex(o => o.priority == this.actionPrioToUpdate)
    var index2 = this.iaService.ia.actions[index].conditions.findIndex(o => o.compareValue == this.conditionToUpdate.compareValue && o.conditionalType == this.conditionToUpdate.conditionalType && o.operator == this.conditionToUpdate.operator);
    this.iaService.ia.actions[index].conditions.splice(index2, 1);
  }
  onContextMenuActionUpdateCondition() {
    const dialogRef = this.dialog.open(DialogAddConditionComponent, {
      width: '450px',
      data: this.conditionToUpdate 
    });

    dialogRef.afterClosed().subscribe(result => {
      var index = this.iaService.ia.actions.findIndex(o => o.priority == this.actionPrioToUpdate);
      var index2 = this.iaService.ia.actions[index].conditions.findIndex(o => o.compareValue == this.conditionToUpdate.compareValue && o.conditionalType == this.conditionToUpdate.conditionalType && o.operator == this.conditionToUpdate.operator);
        this.iaService.ia.actions[index].conditions[index2] =result;
    });
  }

  createIAInService() {
    this.iaService.ia = this.iaToCreate;
  }

  getSpellImage(id) {
    return 'assets/img/spell/' + id + '.svg';
  }

  addCondition(action: SpellAction) {
    const dialogRef = this.dialog.open(DialogAddConditionComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        if (action.conditions != null)
          action.conditions.push(result);
        else
          action.conditions = [result];
      }

    });
  }
  deleteSpell(action) {
    this.iaService.deleteSpell(action);
}


  getTranslation(value) {
    return this.translateService.instant('CREATEIA.' + value);
  }
getSymbol(value){
  switch (value) {
    case 'Inferior':
      return '<'
    case 'InferiorEqual':
      return '&#8804;'
    case 'Superior':
      return '>'
    case 'SuperiorEqual':
      return '&#8805;'
    case 'Equal':
      return '='
    case 'NotEqual':
      return '&#8800;'
    default:
  }
  } 

  CreateIA() {
    console.log(this.iaService.ia);
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
