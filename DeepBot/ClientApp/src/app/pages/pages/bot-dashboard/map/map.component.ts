import { Component, Input, OnInit, OnChanges } from '@angular/core';
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
export class MapComponent implements OnChanges {
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

  ngOnChanges(): void {
    if (this.map !== null) {
      this.Init(this.map)
    }
  }

  // Init cells
  _InitCells(Width, Height, mapData) {
    for (var q = 0; q < this.CellsCount; q++) {
      this.CELLPOS[q] = { los: false };
      if (mapData.cells[q] !== undefined && !mapData.cells[q].isWalkable) {
        this.CELLPOS[q].mov = true;
      }
      else {
        this.CELLPOS[q].mov = false;
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
          this.CELLPOS[cellId++].Points = { left, top, right, down, x, y };
        }
      }
      else {
        for (var x = 0; x <= this.map.mapWidth - 2; x++) {
          var left = { x: offsetX + x * cellWidth + midCellWidth, y: offsetY + y * midCellHeight + midCellHeight };
          var top = { x: offsetX + x * cellWidth + cellWidth, y: offsetY + y * midCellHeight };
          var right = { x: offsetX + x * cellWidth + cellWidth + midCellWidth, y: offsetY + y * midCellHeight + midCellHeight };
          var down = { x: offsetX + x * cellWidth + cellWidth, y: offsetY + y * midCellHeight + cellHeight };
          this.CELLPOS[cellId++].Points = { left, top, right, down, x, y };
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
        if (this.CELLPOS[CellID].mov) {
          this._DrawTileFromPos(_Canvas, this.CELLPOS[CellID].Points, 0xBBBBBB, undefined, false);
        }
        else {
          this._DrawTileFromPos(_Canvas, this.CELLPOS[CellID].Points, 0xFFFFFF, 0xBBBBBB, true); // Affichage de la grille
          if (this.Config.DisplayCellID == false) this._DrawTextFromPos(_Canvas, this.CELLPOS[CellID].Points, CellID, "#e74c3c");
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
    if(isWalkable){
    target.beginPath();
    target.moveTo(Points.top.x, Points.top.y + paddingTop);
    target.lineTo(Points.right.x, Points.right.y + paddingTop);
    target.lineTo(Points.down.x, Points.down.y + paddingTop);
    target.lineTo(Points.left.x, Points.left.y + paddingTop);
    target.closePath();
    if (color != undefined) target.fill();
    if (borderColor != undefined) target.stroke();
    }
    if(!isWalkable){
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
    target.fillText(_text, Points.left.x + (paddingTop - (paddingTop / _text.length > 2 ? 9 : 4)), Points.right.y + paddingTop);
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

  // CommonCellWidth = 43;
  // CommonCellHeight = 21.5;
  // CellsCount = 560;
  // Cells = {};
  // Context = undefined;
  // Canvas = undefined;

  // ngOnChanges() {
  //   this.Canvas = $('#isocanvas');
  //   this.Context = this.Canvas[0].getContext('2d');
  //   if (this.map !== null) {
  //     this.DrawMap(this.Canvas, this.map, this.Context);
  //   }
  // }


  // resizeCanvas(event) {
  //   this.Canvas = $('#isocanvas');
  //   this.Context = this.Canvas[0].getContext('2d');
  //   this.Context.canvas.width = (event.target.innerWidth - event.target.innerWidth / 2).toString();
  //   this.Context.canvas.height = (event.target.innerHeight - event.target.innerHeight / 2).toString();
  //   this.DrawMap(this.Canvas, this.map, this.Context);
  // }

  // DrawMap(canvas, mapData, Context): void {
  //   Context = canvas[0].getContext('2d');
  //   Context.clearRect(0, 0, canvas.width, canvas.height);
  //   var drawedHeight = Context.canvas.height - (Context.canvas.height / 20) * 2;
  //   this.BuildMap(Context.canvas.width, drawedHeight, mapData);

  //   for (var c in this.Cells) {
  //     var cell = this.Cells[c];
  //     if (cell.mov) {
  //       Context.fillStyle = 'darkgray';
  //       Context.font = "10px";
  //     }
  //     else if (cell.los) {
  //       Context.fillStyle = 'black';
  //     }
  //     else {
  //       Context.fillStyle = "#dadada";
  //     }
  //     Context.beginPath();
  //     if (cell.Points !== undefined) {
  // var paddingTop = cell.Points.down.y - cell.Points.top.y;
  // Context.moveTo(cell.Points.top.x, cell.Points.top.y + paddingTop);
  // Context.lineTo(cell.Points.right.x, cell.Points.right.y + paddingTop);
  // Context.lineTo(cell.Points.down.x, cell.Points.down.y + paddingTop);
  // Context.lineTo(cell.Points.left.x, cell.Points.left.y + paddingTop);
  // Context.closePath();
  // Context.fill();
  //       let target = canvas[0].getContext("2d");
  //       target.fillStyle = "#e74c3c";
  //       target.fillText(c, (cell.Points.x + this.CommonCellWidth / 2) - (3 * cell.length), (cell.Points.y + this.CommonCellHeight / 2) + (cell.length - 1))
  //     }
  //   }
  // }

  // BuildMap(Width, Height, mapData): void {
  //   for (var q = 0; q < this.CellsCount; q++) {
  //     this.Cells[q] = { los: false };
  //     if (mapData.cells[q] !== undefined && !mapData.cells[q].isWalkable) {
  //       this.Cells[q].mov = true;
  //     }
  //     else {
  //       this.Cells[q].mov = false;
  //     }
  //   }
  //   var cellId = 0;
  //   var cellWidth = this.GetMaxScaling(Width, Height);
  //   var cellHeight = Math.ceil(cellWidth / 2);

  //   var offsetX = (Width - ((this.map.mapWidth + 0.5) * cellWidth)) / 2;
  //   var offsetY = (Height - ((this.map.mapHeight + 0.5) * cellHeight)) / 2;

  //   var midCellHeight = cellHeight / 2;
  //   var midCellWidth = cellWidth / 2;

  //   for (var y = 0; y <= 2 * (this.map.mapHeight - 1); y++) {
  //     if (y % 2 === 0)
  //       for (var x = 0; x <= this.map.mapWidth - 1; x++) {
  //         var left = { x: offsetX + x * cellWidth, y: offsetY + y * midCellHeight + midCellHeight };
  //         var top = { x: offsetX + x * cellWidth + midCellWidth, y: offsetY + y * midCellHeight };
  //         var right = { x: offsetX + x * cellWidth + cellWidth, y: offsetY + y * midCellHeight + midCellHeight };
  //         var down = { x: offsetX + x * cellWidth + midCellWidth, y: offsetY + y * midCellHeight + cellHeight };
  //         this.Cells[cellId++].Points = { left, top, right, down, x, y };
  //       }
  //     else
  //       for (var x = 0; x <= this.map.mapWidth - 2; x++) {
  //         var left = { x: offsetX + x * cellWidth + midCellWidth, y: offsetY + y * midCellHeight + midCellHeight };
  //         var top = { x: offsetX + x * cellWidth + cellWidth, y: offsetY + y * midCellHeight };
  //         var right = { x: offsetX + x * cellWidth + cellWidth + midCellWidth, y: offsetY + y * midCellHeight + midCellHeight };
  //         var down = { x: offsetX + x * cellWidth + cellWidth, y: offsetY + y * midCellHeight + cellHeight };
  //         this.Cells[cellId++].Points = { left, top, right, down, x, y };
  //       }
  //   }
  // }

  // GetMaxScaling(Width, Height): number {
  //   var cellWidth = Width / (this.map.mapWidth + 1);
  //   var cellHeight = Height / (this.map.mapHeight + 1);
  //   cellWidth = Math.min(cellHeight * 2, cellWidth);
  //   return cellWidth;
  // }
  GetMaxScaling(Width, Height): number {
    var cellWidth = Width / (this.map.mapWidth + 1);
    var cellHeight = Height / (this.map.mapHeight + 1);
    cellWidth = Math.min(cellHeight * 2, cellWidth);
    return cellWidth;
  }



  @Input() character: Character
  /** map ctor */

}
