import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Character } from '../../../../../webModel/Character';
import $ from 'jquery';
import { MapMessage } from '../../../../../webModel/MapMessage';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
/** map component*/
export class MapComponent implements OnInit {
  @Input() map: MapMessage;
  TileWidth = 50; // pixels
  TileHeight = 25; // pixels

  //MAP_HEIGHT = 17;
  //MAP_WIDTH = 15;

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
    this.context.canvas.width = this.TileWidth * (this.map.MapWidth + 1);
    this.context.canvas.height = this.TileHeight * (this.map.MapHeight + 1);

    this.InitCells();
    this.SetMap();
    this.InitEntities(null);
  }

  InitCells() {
    this.CELLPOS = [];
    let startX = 0, startY = 0, cell = 0;
    for (let a = 0; a < this.map.MapHeight; a++) {
      for (let b = 0; b < this.map.MapWidth; b++) {
        let p = this.GetCoordsFromCellID(cell);
        this.CELLPOS[cell] = { x: startX + b, y: startY + b, X: p.X * this.TileWidth + (p.Y % 2 == 1 ? this.TileWidth / 2 : 0), Y: p.Y * this.TileHeight / 2 };
        cell++;
      }
      startX++;
      for (let b = 0; b < this.map.MapWidth; b++) {
        let p = this.GetCoordsFromCellID(cell);
        this.CELLPOS[cell] = { x: startX + b, y: startY + b, X: p.X * this.TileWidth + (p.Y % 2 == 1 ? this.TileWidth / 2 : 0), Y: p.Y * this.TileHeight / 2 };
        cell++;
      }
      startY--;
    }
  }

  SetMap() {
    let _Canvas = this.GetTempCanvas();
    for (var CellID in this.CELLPOS) {
      this.DrawTileFromPos(_Canvas, this.CELLPOS[CellID].X, this.CELLPOS[CellID].Y, 0xFFFFFF, 0xBBBBBB); // Affichage de la grille
      // var mask = 0 ? 5 : 1;
      // if (map.cells[q].l & mask === 1){
      this.DrawTileFromPos(_Canvas, this.CELLPOS[CellID].X, this.CELLPOS[CellID].Y, 0xBBBBBB, 'fff');
      // }
      this.DrawTextFromPos(_Canvas, this.CELLPOS[CellID].X, this.CELLPOS[CellID].Y, CellID, "#e74c3c");
    }
    this.Storage.Canvas.Map = _Canvas;
    this._Bind([_Canvas, this.Storage.Canvas.Entities]);
  }

  InitEntities(EntitiesData) {
    this.Entities = [];
    for (var i in EntitiesData) {
      let data = EntitiesData[i];
      if (!this.Entities[data.cell]) this.Entities[data.cell] = [];
      if (data._type == "InteractiveElement") data.color = this.GetColorFromString(data._type + data.elementTypeId)
      else data.color = this.GetColorFromString(data._type)
      this.Entities[data.cell].push(data);
    }
  }

  SetEntities(EntitiesData) {
    this.InitEntities(EntitiesData);
    let _Canvas = this.GetTempCanvas();
    for (var CellID in this.CELLPOS) {
      if (this.Entities[CellID] && this.Entities[CellID].length) {
        if (this.Entities[CellID][0]._type != "InteractiveElement") this.DrawCircleFromPos(_Canvas, this.CELLPOS[CellID].X, this.CELLPOS[CellID].Y, this.Entities[CellID][0].color);
        else this.DrawSquareFromPos(_Canvas, this.CELLPOS[CellID].X, this.CELLPOS[CellID].Y, this.Entities[CellID][0].color);
      }
    }
    this.Storage.Source.Entities = EntitiesData;
    this.Storage.Canvas.Entities = _Canvas;
    this._Bind([this.Storage.Canvas.Map, _Canvas]);
  }

  _Bind(Maps) {
    let Context = this.canvas[0].getContext('2d');
    Context.clearRect(0, 0, this.TileWidth * (this.map.MapWidth + 1), this.TileHeight * (this.map.MapHeight + 1));
    Maps.forEach((Value, Index, Elem) => {
      Context.drawImage(Value, 0, 0);
    })
  }

  GetColorFromString(ElemType) {
    let i = 0, r = 0, g = 0, b = 0;
    for (i = 0; ElemType && i < ElemType.length; ++i) {
      switch (i % 3) {
        case 0: r += (ElemType.charCodeAt(i)) * 20; g += (ElemType.charCodeAt(i)) * 10; b += (ElemType.charCodeAt(i)) * 40; break;
        case 1: r += (ElemType.charCodeAt(i)) * 10; g += (ElemType.charCodeAt(i)) * 40; b += (ElemType.charCodeAt(i)) * 20; break;
        case 2: r += (ElemType.charCodeAt(i)) * 40; g += (ElemType.charCodeAt(i)) * 20; b += (ElemType.charCodeAt(i)) * 10; break;
      }
    }
    r = 0xEE - r % 150;
    g = 0xEE - g % 150;
    b = 0xEE - b % 150;
    return ((r & 0xFF) << 16) | ((g & 0xFF) << 8) | (b & 0xFF);
  }

  Refresh() { this._Bind([this.Storage.Canvas.Map, this.Storage.Canvas.Entities]); }

  DrawCircleFromPos(canvas, x, y, color) {
    let target = canvas.getContext("2d");
    if (color != undefined) target.fillStyle = "#" + color.toString(16);
    target.beginPath();
    target.arc(x + this.TileWidth / 2, y + this.TileHeight / 2, this.TileHeight / 3, 0, Math.PI * 2, false);
    target.closePath();
    if (color != undefined) target.fill();
  }

  DrawSquareFromPos(canvas, x, y, color) {
    let target = canvas.getContext("2d");
    if (color != undefined) target.fillStyle = "#" + color.toString(16);
    target.beginPath();
    target.fillRect(x + this.TileHeight * .7, y + this.TileHeight * .2, this.TileHeight * .6, this.TileHeight * .6);
    target.closePath();
    if (color != undefined) target.fill();
  }

  DrawTextFromPos(canvas, x, y, _text, _fillStyle) {
    let target = canvas.getContext("2d");
    target.font = "10px";
    target.fillStyle = _fillStyle;
    target.fillText(_text, (x + this.TileWidth / 2) - (3 * _text.length), (y + this.TileHeight / 2) + (_text.length - 1));
  }

  GetCoordsFromCellID(CellID) { return { X: CellID % this.map.MapWidth, Y: Math.floor(CellID / this.map.MapWidth) } }

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

  test(e) {
    console.log(e);
  }

  resizeCanvas() {
    this.context.canvas.width = window.innerWidth;
    this.context.canvas.height = window.innerHeight;

    this.init();
  }

  GetTempCanvas() {
    let _Canvas = document.createElement('canvas');
    _Canvas.width = this.TileWidth * (this.map.MapWidth + 1);;
    _Canvas.height = this.TileWidth * (this.map.MapHeight + 1);;
    return _Canvas;
  }
}
