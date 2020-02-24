import { Cell } from './Cell';

export interface MapMessage {
  Cells: Cell[],
  AreaName: string,
  MapWidth: number,
  MapHeight: number,
  Coordinate: string,
  tcpId: string
}
