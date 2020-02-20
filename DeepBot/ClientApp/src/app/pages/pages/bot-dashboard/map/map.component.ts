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
  ngOnInit(): void {
    for (let i = 0; i < 17; i++) {
      this.mapHeight.push(i);
    }
    for (let i = 0; i < 15; i++) {
      this.mapWidth.push(i);    
    }
  }
  mapHeight = [];
  mapWidth = [];
  @Input() character: Character
    /** map ctor */
  constructor(private translateService: TranslateService) {

    }
}
