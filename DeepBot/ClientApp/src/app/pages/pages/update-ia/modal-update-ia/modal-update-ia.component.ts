import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { IA, SpellAction, Classe, TypeIA, Target, ConditionalAction, OperatorType, ConditionalType } from '../../../../../webModel/IA';
import { SortOsamodas, SortEnutrof, SortCra, SortFeca, SortSram, SortXelor, SortEcaflip, SortEniripsa, SortIop, SortSadida, SortSacrieur, SortPandawa } from '../../../../../webModel/Enum/SpellBreed';
import { MatDialogRef, MAT_DIALOG_DATA, MatMenuTrigger, MatDialog } from '@angular/material';
import { IaInterface } from '../../../../../webModel/Interface/ia.interface';
import { IaService } from '../../../../services/ia.service';
import { Store, select } from '@ngrx/store';
import * as fromia from 'src/app/app-reducers/ia/reducers';
import { TranslateService } from '@ngx-translate/core';
import icDoneAll from '@iconify/icons-ic/twotone-done-all';
import icPlus from '@iconify/icons-ic/baseline-add';
import icDelete from '@iconify/icons-fa-solid/trash';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DialogAddConditionComponent } from '../../create-ia/dialog-add-condition/dialog-add-condition.component';
import { stagger80ms } from '../../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { scaleIn400ms } from '../../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import { IaActions } from '../../../../app-reducers/ia/actions';

@Component({
    selector: 'app-modal-update-ia',
    templateUrl: './modal-update-ia.component.html',
  styleUrls: ['./modal-update-ia.component.scss'],
  animations: [
    stagger80ms,
    fadeInUp400ms,
    scaleIn400ms,
    fadeInRight400ms
  ]
})
/** modal-update-ia component*/
export class ModalUpdateIaComponent implements OnInit {
  IaToUpdate: IA = null;
  spellToAdd: SpellAction = new SpellAction;
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
    /** modal-update-ia ctor */
  constructor(private dialogRef: MatDialogRef<ModalUpdateIaComponent>, public dialog: MatDialog, private iaService: IaService, private storeIa: Store<fromia.State>, private translateService: TranslateService,
    @Inject(MAT_DIALOG_DATA) private iaKey: IaInterface['key'],) {
    this.IaToUpdate = new IA();
    iaService.changeIaUpdateEmitted$.subscribe(
      (result: IA) => {
        result.classe = Classe['' + result.classe + ''];
        result.type = TypeIA['' + result.type + ''];
        for (var i = 0; i < result.actions.length; i++) {
          result.actions[i].target = Target['' + result.actions[i].target + ''];
          for (var j = 0; j < result.actions[i].conditions.length; j++) {
            result.actions[i].conditions[j].operator = OperatorType['' + result.actions[i].conditions[j].compareValue + ''];
            result.actions[i].conditions[j].conditionalType = ConditionalType['' + result.actions[i].conditions[j].conditionalType + ''];
          }
        }
        this.IaToUpdate = result;
      }
    );
  }


  UpdateIA() {
    let updatedIa = this.IaToUpdate;
    this.storeIa.dispatch(IaActions.updateIa({ updatedIa: JSON.parse(JSON.stringify(updatedIa)) }));
    this.dialogRef.close();
  }

  onContextMenu(event, condition, actionprio) {
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
      this.iaService.ia.actions[index].conditions[index2] = result;
    });
  }


  dropSpell(event: CdkDragDrop<SpellAction[]>) {
    console.log(event);
    moveItemInArray(this.iaService.ia.actions, event.previousIndex, event.currentIndex)

    for (var i = 0; i < this.iaService.ia.actions.length; i++) {
      this.iaService.ia.actions[i].priority = i + 1;
    }
  }

  ngOnInit() {
    this.storeIa.pipe(select(fromia.getAllIa)).subscribe(
      (result: IA[]) => {
        for (var i = 0; i < result.length; i++) {
          if (result[i].key == this.iaKey) {
            this.iaService.emitChange(result[i]);
          }
        }
      });
  }

  DeleteIa() {
    let iaKeyToDelete = this.IaToUpdate.key;
    this.storeIa.dispatch(IaActions.deleteIa({ iaKeyToDelete }));
    this.dialogRef.close();
  }

  createIAInService() {
    this.iaService.ia = this.IaToUpdate;
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
  classChanged(classe) {
        this.iaService.ia.actions = [];    
}

  getSymbol(value) {
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
