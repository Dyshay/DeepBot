import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-zaap',
  templateUrl: './dialog-zaap.component.html',
  styleUrls: ['./dialog-zaap.component.scss']
})
/** dialog-zaap component*/
export class DialogZaapComponent {
  zaapSelected :number;

  /** dialog-zaap ctor */
  constructor(public dialogRef: MatDialogRef<DialogZaapComponent>) {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  Zaaps: Zaap[] = [
    {
      name: 'Bonta',
      position: '-32,-58',
      id: 1
    },
    {
      name: 'Plaine Rocheuse',
      position: '-14,-47',
      id: 2
    },
    {
      name: 'Village Brigandins',
      position: '-18,-26',
      id: 3
    },
    {
      name: 'Massif Cania',
      position: '-20,-20',
      id: 4
    },
    {
      name: 'Tainela ',
      position: ' 1,-32',
      id: 5
    },
    {
      name: 'Astrub ',
      position: '4,-19',
      id: 6
    },
    {
      name: 'pandala air',
      position: '17,-31',
      id: 7
    },
    {
      name: 'pandala eau',
      position: '23,-22',
      id: 8
    },
    {
      name: 'pandala neutre',
      position: '26,-37',
      id: 9
    },
    {
      name: 'pandala terre',
      position: '30,-39',
      id: 10
    },
    {
      name: 'pandala feu',
      position: '29,-49',
      id: 11
    },
    {
      name: 'ile wabbit ',
      position: '25,-4',
      id: 12
    },
    {
      name: 'moon ',
      position: '35,12',
      id: 13
    },
    {
      name: 'montagne craq',
      position: '-5,-8',
      id: 14
    },
    {
      name: 'chateau amakna',
      position: '3,-5',
      id: 15
    },
    {
      name: 'port de madrestam',
      position: '7,-4',
      id: 16
    },
    {
      name: 'amakna village',
      position: '-2,0',
      id: 17
    },
    {
      name: 'la milifutaie',
      position: '5,7',
      id: 18
    },
    {
      name: 'bord de la foret maléfique',
      position: '-1,13',
      id: 19
    },
    {
      name: 'port de sufokia ',
      position: '10,22',
      id: 20
    },
    {
      name: 'plaine des scarafeuilles',
      position: '-1,24',
      id: 21
    },
    {
      name: 'brakmar ',
      position: '-25,39',
      id: 22
    },
    {
      name: 'lance de sidimote ',
      position: '-24,12',
      id: 23
    },
    {
      name: 'villages des eleveurs',
      position: '-16,1',
      id: 24
    },
    {
      name: 'territoire des dopeuls',
      position: '-34,-8',
      id: 25
    },
    {
      name: 'ple village côtier',
      position: '-46,18',
      id: 26
    },
  ];
}

interface Zaap {
  name: string;
  position: string;
  id: number;
}

