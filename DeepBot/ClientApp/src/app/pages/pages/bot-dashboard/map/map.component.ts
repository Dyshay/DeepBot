import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Character } from '../../../../../webModel/Character';
import $ from 'jquery';
import { MapMessage } from '../../../../../webModel/MapMessage';
import { CellTypes } from '../../../../../webModel/Enum/CellTypes';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
/** map component*/
export class MapComponent implements OnChanges, OnInit, OnDestroy {

  @Input() map: MapMessage;
  TileWidth = 53; // 43
  TileHeight = 27; // 21.5
  MAP_WIDTH = 15;
  MAP_HEIGHT = 17;
  CellsCount = 560;
  // Vars
  Canvas = undefined;
  Context = undefined;
  CELLPOS = {};
  Entities = [];
  Storage = {
    Source: { Map: null, Entities: null },
    Canvas: { Map: this.GetTempCanvas(), Entities: this.GetTempCanvas() }
  };

  Config = { DisplayCellID: false }

  ngOnInit(){
    this.Canvas = document.getElementById("isocanvas");
    this.Context = this.Canvas.getContext('2d');
    this.Canvas.addEventListener('mousedown', this.handlerMouseClick.bind(this), false);
  }

  ngOnChanges(): void {
    if (this.map !== null) {
      this.Init(this.map)
    }
  }

  ngOnDestroy(){
    this.Canvas = document.getElementById("isocanvas");
    this.Context = this.Canvas.getContext('2d');
    this.Canvas.removeEventListener("mousedown", this.handlerMouseClick.bind(this));
  }

  handlerMouseClick(event) {
    var r = this.Canvas.getBoundingClientRect(),
      x = event.clientX - r.left,
      y = event.clientY - r.top;

    for (var cellid in this.CELLPOS) {
      if (this.CELLPOS[cellid].Points !== undefined && this.isInCell(this.CELLPOS[cellid], x, y)) {
        //SEND CELLID TO SERVER
        break;
      }
    }
  }

  isInCell(cell, x, y) {
    var dx = Math.abs(x - cell.Points.centerX);
    var dy = Math.abs(y - cell.Points.centerY);
    return (dx / (this.TileWidth) + dy / (this.TileHeight) <= 1.31)
  }

  getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  // Init cells
  _InitCells(Width, Height, mapData) {
    for (var q = 0; q < this.CellsCount; q++) {
      this.CELLPOS[q] = { los: false };
      if (mapData.cells[q] !== undefined) {
        this.CELLPOS[q].mov = !mapData.cells[q].isWalkable
        this.CELLPOS[q].IsInLineOfSight = mapData.cells[q].isInLineOfSight;
        this.CELLPOS[q].isInteractiveCell = mapData.cells[q].isInteractiveCell;
        this.CELLPOS[q].teleport = mapData.cells[q].isTeleportCell
      }
    }
    var cellId = 0;
    var cellWidth = this.GetMaxScaling(Width, Height);
    var cellHeight = Math.ceil(cellWidth / 2);

    var offsetX = (Width - ((this.map.mapWidth + 0.5) * cellWidth)) / 2;
    var offsetY = (Height - ((this.map.mapHeight + 0.5) * cellHeight)) / 2;

    var midCellHeight = cellHeight / 2;
    var midCellWidth = cellWidth / 2;

    for (var y = 0; y <= 2 * (this.map.mapHeight - 1); y++) {
      if (y % 2 === 0) {
        for (var x = 0; x <= this.map.mapWidth - 1; x++) {
          var left = { x: offsetX + x * cellWidth, y: offsetY + y * midCellHeight + midCellHeight };
          var top = { x: offsetX + x * cellWidth + midCellWidth, y: offsetY + y * midCellHeight };
          var right = { x: offsetX + x * cellWidth + cellWidth, y: offsetY + y * midCellHeight + midCellHeight };
          var down = { x: offsetX + x * cellWidth + midCellWidth, y: offsetY + y * midCellHeight + cellHeight };
          var centerX = right.x - ((right.x - left.x) / 2);
          var centerY = down.y - ((down.y - top.y) / 2);
          this.CELLPOS[cellId++].Points = { left, top, right, down, x, y, centerX, centerY };
        }
      }
      else {
        for (var x = 0; x <= this.map.mapWidth - 2; x++) {
          var left = { x: offsetX + x * cellWidth + midCellWidth, y: offsetY + y * midCellHeight + midCellHeight };
          var top = { x: offsetX + x * cellWidth + cellWidth, y: offsetY + y * midCellHeight };
          var right = { x: offsetX + x * cellWidth + cellWidth + midCellWidth, y: offsetY + y * midCellHeight + midCellHeight };
          var down = { x: offsetX + x * cellWidth + cellWidth, y: offsetY + y * midCellHeight + cellHeight };
          var centerX = right.x - ((right.x - left.x) / 2);
          var centerY = down.y - ((down.y - top.y) / 2);
          this.CELLPOS[cellId++].Points = { left, top, right, down, x, y, centerX, centerY };
        }
      }
    }
  }

  // Init entities
  _InitEntities(EntitiesData) {
    this.Entities = [];
    for (var i in EntitiesData) {
      let data = EntitiesData[i];
      if (!this.Entities[data.cell]) this.Entities[data.cell] = [];
      if (data._type == "InteractiveElement") data.color = this.GetColorFromString(data._type + data.elementTypeId)
      else data.color = this.GetColorFromString(data._type)
      this.Entities[data.cell].push(data);
    }
  }

  // Init map construction
  Init(mapData) {
    // Set canvas size
    this.Canvas = $('#isocanvas')[0];
    this.Context = this.Canvas.getContext('2d');
    // this.Context.canvas.width = this.TileWidth * (mapData.mapWidth);
    // Start init cells & start map/entities building
    var drawedHeight = this.Context.canvas.height - (this.Context.canvas.height / 20) * 2;
    this._InitCells(this.Context.canvas.width, drawedHeight, this.map);
    this.SetMap();
    // this.SetEntities(EntitiesData);
  }

  // Set map set <Obstacles> and <Los> (Line of sight)
  SetMap() {
    let _Canvas = this.GetTempCanvas();
    for (var CellID in this.CELLPOS) {
      if (this.CELLPOS[CellID].Points !== undefined) {
        let color = this.GetColor(this.CELLPOS[CellID]);
        if (this.CELLPOS[CellID].mov) {
          this._DrawTileFromPos(_Canvas, this.CELLPOS[CellID].Points, color, 0xFFFFFF, false);
        }
        else {
          this._DrawTileFromPos(_Canvas, this.CELLPOS[CellID].Points, color, 0xFFFFFF, true);
          if (this.Config.DisplayCellID == false) this._DrawTextFromPos(_Canvas, this.CELLPOS[CellID].Points, CellID, "#FFF");
        }

      }
    }
    //this.Storage.Source.Map = { Obstacles: Obstacles, Los: Los };
    this.Storage.Canvas.Map = _Canvas;
    this._Bind([_Canvas, this.Storage.Canvas.Entities]);
  }
  UnsetMap() {
    this.Storage.Source.Map = null;
    this.Storage.Canvas.Map = this.GetTempCanvas();
    this._Refresh();
  }

  GetColor(cell) {
    let color = 0x5A5A8C;
    if (!cell.mov)
      color = 0xC1C1D7;
    if (cell.IsInLineOfSight)
      color = 0x14141F;
    if (cell.teleport)
      color = 0xFFA500;
    if (cell.isInteractiveCell)
      color = 0xFFFFFF;

    return color;
  }

  // Show & Hide CellID on map
  DisplayCellID() {
    this.Config.DisplayCellID = true;
    // this.SetMap(this.Storage.Source.Map.Obstacles);
  }
  HideCellID() {
    this.Config.DisplayCellID = false;
    // this.SetMap(this.Storage.Source.Map.Obstacles, this.Storage.Source.Map.Los);
  }

  // Set entities
  SetEntities(EntitiesData) {
    this._InitEntities(EntitiesData);
    let _Canvas = this.GetTempCanvas();
    for (var CellID in this.CELLPOS) {
      if (this.Entities[CellID] && this.Entities[CellID].length) {
        if (this.Entities[CellID][0]._type != "InteractiveElement") this._DrawCircleFromPos(_Canvas, this.CELLPOS[CellID].X, this.CELLPOS[CellID].Y, this.Entities[CellID][0].color);
        else this._DrawSquareFromPos(_Canvas, this.CELLPOS[CellID].X, this.CELLPOS[CellID].Y, this.Entities[CellID][0].color);
      }
    }
    this.Storage.Source.Entities = EntitiesData;
    this.Storage.Canvas.Entities = _Canvas;
    this._Bind([this.Storage.Canvas.Map, _Canvas]);
  }
  UnsetEntities() {
    this.Storage.Source.Entities = null;
    this.Storage.Canvas.Entities = this.GetTempCanvas();
    this._Refresh();
  }

  // Clear, Bind and Show map & entities
  _Bind(Maps) {
    let Context = this.Canvas.getContext('2d');
    Context.clearRect(0, 0, this.TileWidth * (this.map.mapWidth + 1), this.TileHeight * (this.map.mapWidth + 1));
    Maps.forEach((Value, Index, Elem) => {
      Context.drawImage(Value, 0, 0, Value.width, Value.height);
    })
  }

  // Refresh function if map or entities was removed
  _Refresh() { this._Bind([this.Storage.Canvas.Map, this.Storage.Canvas.Entities]); }

  // Core function for Drawing rect tile
  _DrawTileFromPos(canvas, Points, color, borderColor, isWalkable) {
    let target = canvas.getContext("2d");
    var paddingTop = Points.down.y - Points.top.y;
    if (color != undefined) target.fillStyle = "#" + color.toString(16);
    if (borderColor != undefined) {
      target.strokeStyle = "#" + borderColor.toString(16);
      target.lineWidth = .5;
    }
    if (isWalkable) {
      target.beginPath();
      target.moveTo(Points.top.x, Points.top.y + paddingTop);
      target.lineTo(Points.right.x, Points.right.y + paddingTop);
      target.lineTo(Points.down.x, Points.down.y + paddingTop);
      target.lineTo(Points.left.x, Points.left.y + paddingTop);
      target.closePath();
      if (color != undefined) target.fill();
      if (borderColor != undefined) target.stroke();
    }
    if (!isWalkable) {
      target.beginPath();
      target.moveTo(Points.left.x, Points.left.y + paddingTop - 8);
      target.lineTo(Points.top.x, Points.top.y + paddingTop - 8);
      target.lineTo(Points.right.x, Points.right.y + paddingTop - 8);
      target.lineTo(Points.down.x, Points.down.y + paddingTop - 8);
      target.closePath();
      if (color != undefined) target.fill();
      if (borderColor != undefined) target.stroke();

      target.beginPath();
      target.moveTo(Points.left.x, Points.left.y + paddingTop - 8);
      target.lineTo(Points.down.x, Points.down.y + paddingTop - 8);
      target.lineTo(Points.down.x, Points.down.y + paddingTop);
      target.lineTo(Points.left.x, Points.left.y + paddingTop);
      target.closePath();
      if (color != undefined) target.fill();
      if (borderColor != undefined) target.stroke();

      target.beginPath();
      target.moveTo(Points.right.x, Points.right.y + paddingTop - 8);
      target.lineTo(Points.right.x, Points.right.y + paddingTop);
      target.lineTo(Points.down.x, Points.down.y + paddingTop);
      target.lineTo(Points.down.x, Points.down.y + paddingTop - 8);
      target.closePath();
      if (color != undefined) target.fill();
      if (borderColor != undefined) target.stroke();
    }
  }

  // Core function for Drawing Circle on tile
  _DrawCircleFromPos(canvas, x, y, color) {
    let target = canvas.getContext("2d");
    if (color != undefined) target.fillStyle = "#" + color.toString(16);
    target.beginPath();
    target.arc(x + this.TileWidth / 2, y + this.TileHeight / 2, this.TileHeight / 3, 0, Math.PI * 2, false);
    target.closePath();
    if (color != undefined) target.fill();
  }

  // Core function for Drawing square on tile
  _DrawSquareFromPos(canvas, x, y, color) {
    let target = canvas.getContext("2d");
    if (color != undefined) target.fillStyle = "#" + color.toString(16);
    target.beginPath();
    target.fillRect(x + this.TileHeight * .7, y + this.TileHeight * .2, this.TileHeight * .6, this.TileHeight * .6);
    target.closePath();
    if (color != undefined) target.fill();
  }

  // Core function for drawing text on tile
  _DrawTextFromPos(canvas, Points, _text, _fillStyle) {
    var paddingTop = (Points.down.y - Points.top.y);
    let target = canvas.getContext("2d");
    target.font = "10px";
    target.fillStyle = _fillStyle;
    target.fillText(_text, _text.length > 2 ? Points.centerX - 8 : Points.centerX - 5, Points.centerY + paddingTop + 2.5);
  }

  // Get color from string <ElemType> of element
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


  // Get cell coords X/Y on canvas and vice-versa
  GetCoordsFromCellID(CellID) { return { X: CellID % this.MAP_WIDTH, Y: Math.floor(CellID / this.MAP_WIDTH) } }
  GetCellIDFromCoords(x, y) { return null; }

  // Build temporary canvas
  GetTempCanvas() {
    let _Canvas = document.createElement('canvas');
    _Canvas.width = 800;
    _Canvas.height = 500;
    return _Canvas;
  }

  GetMaxScaling(Width, Height): number {
    var cellWidth = Width / (this.map.mapWidth - 0.8);
    var cellHeight = Height / (this.map.mapHeight - 0.8);
    cellWidth = Math.min(cellHeight * 2, cellWidth);
    return cellWidth;
  }

  @Input() character: Character
  /** map ctor */

}
