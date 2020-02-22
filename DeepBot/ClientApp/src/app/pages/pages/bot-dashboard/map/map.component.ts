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
    // for (let i = 0; i < 17; i++) {
    //   this.mapHeight.push(i);
    // }
    // for (let i = 0; i < 15; i++) {
    //   this.mapWidth.push(i);    
    // }
  }
  mapHeight = 17;
  mapWidth = 15;

  test(i: Number, x: Number){
    console.log(`[${i},${x}]`);
  }

  counter(number: Number){
    return new Array(number)
  }
  @Input() character: Character
    /** map ctor */
  constructor(private translateService: TranslateService) {

    }
}
