import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Character } from '../../../../../webModel/Character';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
/** map component*/
export class MapComponent implements OnInit {
  TileWidth = 50; // pixels
  TileHeight = 25; // pixels

  MAP_HEIGHT = 17;
  MAP_WIDTH = 15;

  CELLPOS = [];

  Entities = [];
  Storage = {
    Source: { Map: null, Entities: null },
    Canvas: { Map: this.GetTempCanvas(), Entities: this.GetTempCanvas() }
  };

  context = undefined;
  canvas = undefined;

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.canvas = $('#isocanvas');
    this.context = this.canvas[0].getContext("2d");
    this.context.canvas.width = this.TileWidth * (this.MAP_WIDTH + 1);
    this.context.canvas.height = this.TileHeight * (this.MAP_HEIGHT + 1);

    this.InitCells();
    this.SetMap();
  }

  InitCells() {
    this.CELLPOS = [];
    let startX = 0, startY = 0, cell = 0;
    for (let a = 0; a < this.MAP_HEIGHT; a++) {
      for (let b = 0; b < this.MAP_WIDTH; b++) {
        let p = this.GetCoordsFromCellID(cell);
        this.CELLPOS[cell] = { x: startX + b, y: startY + b, X: p.X * this.TileWidth + (p.Y % 2 == 1 ? this.TileWidth / 2 : 0), Y: p.Y * this.TileHeight / 2 };
        cell++;
      }
      startX++;
      for (let b = 0; b < this.MAP_WIDTH; b++) {
        let p = this.GetCoordsFromCellID(cell);
        this.CELLPOS[cell] = { x: startX + b, y: startY + b, X: p.X * this.TileWidth + (p.Y % 2 == 1 ? this.TileWidth / 2 : 0), Y: p.Y * this.TileHeight / 2 };
        cell++;
      }
      startY--;
    }
    console.log(this.CELLPOS);
  }

  SetMap() {
    let _Canvas = this.GetTempCanvas();
    for (var CellID in this.CELLPOS) {
      console.log(CellID);
      this.DrawTileFromPos(_Canvas, this.CELLPOS[CellID].X, this.CELLPOS[CellID].Y, 0xFFFFFF, 0xBBBBBB); // Affichage de la grille
      // var mask = 0 ? 5 : 1;
      // if (map.cells[q].l & mask === 1){
      //   this.DrawTileFromPos(_Canvas, this.CELLPOS[CellID].X, this.CELLPOS[CellID].Y, 0xBBBBBB);
      // }
      this.DrawTextFromPos(_Canvas, this.CELLPOS[CellID].X, this.CELLPOS[CellID].Y, CellID, "#e74c3c");
    }
    this.Storage.Canvas.Map = _Canvas;
    this._Bind([_Canvas, this.Storage.Canvas.Entities]);
  }

  _Bind(Maps) {
    let Context = this.canvas[0].getContext('2d');
    Context.clearRect(0, 0, this.TileWidth * (this.MAP_WIDTH + 1), this.TileHeight * (this.MAP_HEIGHT + 1));
    Maps.forEach((Value, Index, Elem) => {
      Context.drawImage(Value, 0, 0);
    })
  }

  ScreenToWidth(globalX, globalY){
    return ((globalX - this.MAP_WIDTH / 2) / this.TileHeight + (globalY - this.MAP_HEIGHT) / this.TileWidth) / 2;
  }

  ScreenToHeight(globalX, globalY) {
    return ((globalY - this.MAP_HEIGHT) / this.TileWidth - (globalX - this.MAP_WIDTH) / this.TileHeight) / 2;
  }

  DrawTextFromPos(canvas, x, y, _text, _fillStyle) {
    let target = canvas.getContext("2d");
    target.font = "10px";
    target.fillStyle = _fillStyle;
    target.fillText(_text, (x + this.TileWidth / 2) - (3 * _text.length), (y + this.TileHeight / 2) + (_text.length - 1));
  }

  GetCoordsFromCellID(CellID) { return { X: CellID % this.MAP_WIDTH, Y: Math.floor(CellID / this.MAP_WIDTH) } }

  DrawTileFromPos(canvas, x, y, color, borderColor) {
    let target = canvas.getContext("2d");
    if (color != undefined) target.fillStyle = "#" + color.toString(16);
    if (borderColor != undefined) {
      target.strokeStyle = "#" + borderColor.toString(16);
      target.lineWidth = .5;
    }
    target.beginPath();
    target.moveTo(x + this.TileWidth / 2, y + 0);
    target.lineTo(x + this.TileWidth, y + this.TileHeight / 2);
    target.lineTo(x + this.TileWidth / 2, y + this.TileHeight);
    target.lineTo(x + 0, y + this.TileHeight / 2);
    target.lineTo(x + this.TileWidth / 2, y + 0);

    if (color != undefined) target.fill();
    if (borderColor != undefined) target.stroke();
  }



  @Input() character: Character
  /** map ctor */
  constructor(private translateService: TranslateService) {
    window.addEventListener('resize', this.resizeCanvas, false);
    // window.addEventListener('mousemove', this.test);
  }

  test(e){
    console.log(e);
  }

  resizeCanvas() {
    this.context.canvas.width = window.innerWidth;
    this.context.canvas.height = window.innerHeight;

    this.init();
  }

  GetTempCanvas() {
    let _Canvas = document.createElement('canvas');
    _Canvas.width = this.TileWidth * (this.MAP_WIDTH + 1);;
    _Canvas.height = this.TileWidth * (this.MAP_HEIGHT + 1);;
    return _Canvas;
  }
}
