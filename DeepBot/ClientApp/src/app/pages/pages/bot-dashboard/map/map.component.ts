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
  //MapHeight = 20;
  //MapWidth = 14;
  CommonCellHeight = 43;
  CommonCellWidth = 86;
  CellsCount = 560;
  Cells = {};

  ngOnChanges(): void {
    let canvas = $('#isocanvas')[0];
    if(this.map !== null){
      this.DrawMap(canvas, this.map)

    }
  }

  DrawMap(canvas, mapData) {
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    var drawedHeight = context.canvas.height - (context.canvas.height / 20) * 2;
    this.BuildMap(context.canvas.width, drawedHeight, mapData);

    for (var c in this.Cells) {
      var cell = this.Cells[c];
      if (cell.mov) {
        context.fillStyle = 'darkgray';
      }
      else if (cell.los) {
        context.fillStyle = 'black';
      }
      else {
        context.fillStyle = "#dadada";
      }
      context.beginPath();
      if(cell.Points !== undefined){
        var paddingTop = cell.Points.down.y - cell.Points.top.y;
        context.moveTo(cell.Points.top.x, cell.Points.top.y + paddingTop);
        context.lineTo(cell.Points.right.x, cell.Points.right.y + paddingTop);
        context.lineTo(cell.Points.down.x, cell.Points.down.y + paddingTop);
        context.lineTo(cell.Points.left.x, cell.Points.left.y + paddingTop);
        context.closePath();
        context.fill();
      }
    }
  }

 BuildMap(Width, Height, mapData) {
  for (var q = 0; q < this.CellsCount; q++) {
    this.Cells[q] = { los: false };
    if (mapData.cells[q] !== undefined && !mapData.cells[q].isWalkable) {
      this.Cells[q].mov = true;
    }
    else {
      this.Cells[q].mov = false;
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
    if (y % 2 === 0)
      for (var x = 0; x <= this.map.mapWidth - 1; x++) {
        var left = { x: offsetX + x * cellWidth, y: offsetY + y * midCellHeight + midCellHeight };
        var top = { x: offsetX + x * cellWidth + midCellWidth, y: offsetY + y * midCellHeight };
        var right = { x: offsetX + x * cellWidth + cellWidth, y: offsetY + y * midCellHeight + midCellHeight };
        var down = { x: offsetX + x * cellWidth + midCellWidth, y: offsetY + y * midCellHeight + cellHeight };
        this.Cells[cellId++].Points = { left, top, right, down };
      }
    else
      for (var x = 0; x <= this.map.mapWidth - 2; x++) {
        var left = { x: offsetX + x * cellWidth + midCellWidth, y: offsetY + y * midCellHeight + midCellHeight };
        var top = { x: offsetX + x * cellWidth + cellWidth, y: offsetY + y * midCellHeight };
        var right = { x: offsetX + x * cellWidth + cellWidth + midCellWidth, y: offsetY + y * midCellHeight + midCellHeight };
        var down = { x: offsetX + x * cellWidth + cellWidth, y: offsetY + y * midCellHeight + cellHeight };
        this.Cells[cellId++].Points = { left, top, right, down };
      }
  }
}

 GetMaxScaling(Width, Height) {
  var cellWidth = Width / (this.map.mapWidth + 1);
  var cellHeight = Height / (this.map.mapHeight + 1);
  cellWidth = Math.min(cellHeight * 2, cellWidth);
  return cellWidth;
}



@Input() character: Character
/** map ctor */
constructor(private translateService: TranslateService) {
  // window.addEventListener('mousemove', this.test);
}
}
