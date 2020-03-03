import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
    selector: 'app-dialog-zaapi',
    templateUrl: './dialog-zaapi.component.html',
    styleUrls: ['./dialog-zaapi.component.scss']
})
/** dialog-zaapi component*/
export class DialogZaapiComponent implements OnInit {
  zaapiSelected: Zaapi;
  zaapiCtrl: FormControl;
  filteredZaapi$: Observable<Zaapi[]>;
  icClose = icClose;
  icArrowDropDown = icArrowDropDown;
    /** dialog-zaapi ctor */
  constructor(public dialogRef: MatDialogRef<DialogZaapiComponent>) {

  }
  ngOnInit() {
    this.zaapiCtrl = new FormControl();
    this.filteredZaapi$ = this.zaapiCtrl.valueChanges.pipe(
      startWith(''),
      map(zaapi => zaapi ? this.filterZaapi(zaapi) : this.Zaapis.slice())
    );
  }

  filterZaapi(name: string) {
    if (typeof name ==="string")
    return this.Zaapis.filter(zaapi =>
      zaapi.destinationName.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  displayFn(zaapi: Zaapi): string {
    return zaapi && zaapi.destinationName ? zaapi.destinationName : '';
  }


  Zaapis: Zaapi[] = [
    {
      cellId: 15,
      destination: '-15;15',
      destinationName: 'destination 1',
      id:150
    },
    {
      cellId: 15,
      destination: '-17;15',
      destinationName: 'destination 2',
      id: 152
    },
    {
      cellId: 15,
      destination: '-17;18',
      destinationName: 'destination 3',
      id: 153
    }
  ];
}



interface Zaapi {
  destinationName: string;
  destination: string;
  id: number;
  cellId: number;
}
