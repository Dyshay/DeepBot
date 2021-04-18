export class ListZaap {
  public static Zaaps:Zaap[] = [{
    destinationName: 'Bonta',
    destination: '-32;-58',
    id: 1,
    cellId: 150
  },
  {
    destinationName: 'Plaine Rocheuse',
    destination: '-14;-47',
    id: 2,
    cellId: 150
  },
  {
    destinationName: 'Village Brigandins',
    destination: '-18;-26',
    id: 3,
    cellId: 150
  },
  {
    destinationName: 'Massif Cania',
    destination: '-20;-20',
    id: 4,
    cellId: 150
  },
  {
    destinationName: 'Tainela ',
    destination: ' 1;-32',
    id: 5,
    cellId: 150
  },
  {
    destinationName: 'Astrub ',
    destination: '4;-19',
    id: 6,
    cellId: 150
  },
  {
    destinationName: 'pandala air',
    destination: '17;-31',
    id: 7,
    cellId: 150
  },
  {
    destinationName: 'pandala eau',
    destination: '23;-22',
    id: 8,
    cellId: 150
  },
  {
    destinationName: 'pandala neutre',
    destination: '26;-37',
    id: 9,
    cellId: 150
  },
  {
    destinationName: 'pandala terre',
    destination: '30;-39',
    id: 10,
    cellId: 150
  },
  {
    destinationName: 'pandala feu',
    destination: '29;-49',
    id: 11,
    cellId: 150
  },
  {
    destinationName: 'ile wabbit ',
    destination: '25;-4',
    id: 12,
    cellId: 150
  },
  {
    destinationName: 'moon ',
    destination: '35;12',
    id: 13,
    cellId: 150
  },
  {
    destinationName: 'montagne craq',
    destination: '-5;-8',
    id: 14,
    cellId: 150
  },
  {
    destinationName: 'chateau amakna',
    destination: '3;-5',
    id: 15,
    cellId: 150
  },
  {
    destinationName: 'port de madrestam',
    destination: '7;-4',
    id: 16,
    cellId: 150
  },
  {
    destinationName: 'amakna village',
    destination: '-2;0',
    id: 17,
    cellId: 150
  },
  {
    destinationName: 'la milifutaie',
    destination: '5;7',
    id: 18,
    cellId: 150
  },
  {
    destinationName: 'bord de la foret maléfique',
    destination: '-1;13',
    id: 19,
    cellId: 150
  },
  {
    destinationName: 'port de sufokia ',
    destination: '10;22',
    id: 20,
    cellId: 150
  },
  {
    destinationName: 'plaine des scarafeuilles',
    destination: '-1;24',
    id: 21,
    cellId: 150
  },
  {
    destinationName: 'brakmar ',
    destination: '-25;39',
    id: 22,
    cellId: 150
  },
  {
    destinationName: 'lance de sidimote ',
    destination: '-24;12',
    id: 23,
    cellId: 150
  },
  {
    destinationName: 'villages des eleveurs',
    destination: '-16;1',
    id: 24,
    cellId: 150
  },
  {
    destinationName: 'territoire des dopeuls',
    destination: '-34;-8',
    id: 25,
    cellId: 150
  },
  {
    destinationName: 'ple village côtier',
    destination: '-46;18',
    id: 26,
    cellId: 150
  },
  ];
}

export interface Zaap {
  destinationName: string;
  destination: string;
  id: number;
  cellId: number;
}
