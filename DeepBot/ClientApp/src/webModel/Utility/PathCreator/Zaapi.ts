export class ListZaapi {
  public static Zaapis: Zaapi[] = [
    {
      cellId: 15,
      destination: '-15;15',
      destinationName: 'destination 1',
      id: 150
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

export interface Zaapi {
  destinationName: string;
  destination: string;
  id: number;
  cellId: number;
}
