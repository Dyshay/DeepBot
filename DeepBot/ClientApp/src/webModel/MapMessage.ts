import { Cell } from './Cell';

export interface MapMessage {
  cells: Cell[],
  AreaName: string,
  mapWidth: number,
  mapHeight: number,
  Coordinate: string,
  tcpId: string
}
