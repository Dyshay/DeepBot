import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PathAction } from '../../../../../webModel/Utility/PathCreator/Path';
import icDelete from '@iconify/icons-fa-solid/trash';
import { ListZaap,Zaap } from '../../../../../webModel/Utility/PathCreator/Zaap';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Zaapi, ListZaapi } from '../../../../../webModel/Utility/PathCreator/Zaapi';
import { startWith, map } from 'rxjs/operators';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import icClose from '@iconify/icons-ic/twotone-close';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-dialog-list-action',
    templateUrl: './dialog-list-action.component.html',
    styleUrls: ['./dialog-list-action.component.scss']
})
/** dialog-list-action component*/
export class DialogListActionComponent implements OnInit {
  icDelete = icDelete;
  directions: string[] = ['Top', 'Right', 'Bottom', 'Left'];
  zaapSelected:Zaap = null;
  Zaaps = ListZaap.Zaaps;
  icClose = icClose;
  icArrowDropDown = icArrowDropDown;
  zaapiSelected: Zaapi =null;
  zaapiCtrl: FormControl;
  filteredZaapi$: Observable<Zaapi[]>;

    /** dialog-list-action ctor */
  constructor(public dialogRef: MatDialogRef<DialogListActionComponent>, @Inject(MAT_DIALOG_DATA) public data: PathAction, private toastr: ToastrService, private translateService: TranslateService) {
    for (var i = 0; i < data.actions.length; i++) {
      if (data.actions[i].zaapAction != null)
        this.zaapSelected = this.Zaaps.find(o => o.id = data.actions[i].zaapAction.zaapId);
      if (data.actions[i].zaapiAction != null)
        this.zaapiSelected = ListZaapi.Zaapis.find(o => o.id = data.actions[i].zaapiAction.zaapiId )
    }
  }

  ngOnInit() {
    this.zaapiCtrl = new FormControl();
    this.zaapiCtrl.setValue(this.zaapiSelected);
    this.filteredZaapi$ = this.zaapiCtrl.valueChanges.pipe(
      startWith(''),
      map(zaapi => zaapi ? this.filterZaapi(zaapi) : ListZaapi.Zaapis.slice())
    );
  } 

  displayFn(zaapi): string {
    return zaapi && zaapi.destinationName ? zaapi.destinationName : '';
  }

  filterZaapi(name: string) {
    if (typeof name === "string")
      return ListZaapi.Zaapis.filter(zaapi =>
        zaapi.destinationName.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  updateAction() {
    if (this.zaapSelected !== null) {
      this.data.actions.find(o => o.moveAction.cellId == this.Zaaps.find(o => o.id == this.data.actions.find(o => o.zaapAction).zaapAction.zaapId).cellId).moveAction.cellId = this.zaapSelected.cellId;
      this.data.actions.find(o => o.zaapAction != null).zaapAction.destination = this.zaapSelected.destination;
      this.data.actions.find(o => o.zaapAction != null).zaapAction.zaapId = this.zaapSelected.id;
    }

    if (this.zaapiSelected != null) {
      this.data.actions.find(o => o.moveAction.cellId == ListZaap.Zaaps.find(o => o.id == this.data.actions.find(o => o.zaapAction).zaapiAction.zaapiId).cellId).moveAction.cellId = this.zaapiSelected.cellId;

      this.data.actions.find(o => o.zaapiAction != null).zaapiAction.destination = this.zaapiSelected.destination;
      this.data.actions.find(o => o.zaapiAction != null).zaapiAction.zaapiId = this.zaapiSelected.cellId;
    }


    this.toastr.success('', this.translateService.instant('CREATEPATH.PATHACTIONMSG18'));
    this.onNoClick();
  }

  deleteAction(ordre) {
    var index = this.data.actions.findIndex(o => o.order == ordre);
    if (this.data.actions[index].zaapAction != null)
      this.zaapSelected = null;
    if (this.data.actions[index].zaapiAction != null)
      this.zaapiSelected = null;
    this.data.actions.splice(index,1);
    this.toastr.success('', this.translateService.instant('CREATEPATH.PATHACTIONMSG19'));
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
}

