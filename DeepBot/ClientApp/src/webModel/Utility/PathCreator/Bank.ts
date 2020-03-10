export class ListBank {
  public static Banks: Bank[] = [
    /* brak */
    {
    enterBankCellId: 252,
      exitBankCellId: 324,
    posBank: '-23;40',
    extMapId: 5332,
    intMapId: 6149
    },
    /* Bonta */
    {
      enterBankCellId: 363,
      exitBankCellId: 351,
      posBank: '-29;-58',
      extMapId: 4308,
      intMapId: 10215
    },
    /* Amakna */
    {
      enterBankCellId: 238,
      exitBankCellId: 293,
      posBank: '2;-2',
      extMapId: 40,
      intMapId: 1674
    },
    /* Astrub */
    {
      enterBankCellId: 142,
      exitBankCellId: 381,
      posBank: '4;-16',
      extMapId: 7414,
      intMapId: 7549
    },
    /* Village des Éleveurs */
    {
      enterBankCellId: 400,
      exitBankCellId: 322,
      posBank: '-16;4',
      extMapId: 8800,
      intMapId: 10370
    },
    /* Pandala */
    {
      enterBankCellId: 308,
      exitBankCellId: 338,
      posBank: '24;-36',
      extMapId: 8012,
      intMapId: 8366
    },
  ];
}

export interface Bank {
  enterBankCellId: number;
  exitBankCellId: number;
  posBank: string;
  extMapId: number;
  intMapId: number;
}
