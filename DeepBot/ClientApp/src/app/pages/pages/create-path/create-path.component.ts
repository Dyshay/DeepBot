import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Directive } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { stagger80ms } from '../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { scaleIn400ms } from '../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';
import icPlus from '@iconify/icons-ic/baseline-add';
import icDoneAll from '@iconify/icons-ic/twotone-done-all';
import icLeftArrow from '@iconify/icons-ic/twotone-keyboard-arrow-left'
import icTopArrow from '@iconify/icons-ic/twotone-keyboard-arrow-up'
import icRightArrow from '@iconify/icons-ic/twotone-keyboard-arrow-right'
import icBottomArrow from '@iconify/icons-ic/twotone-keyboard-arrow-down'
import icDelete from '@iconify/icons-fa-solid/trash';
import 'jquery';
import { PathService } from '../../../services/path.service';
import { Path, SpecificMonsterLevel, SpecificMonsterQuantity, CaptureMonsterQuantity, PathAction, MoveAction, UseItemAction, FightAction, GatherAction, InteractionAction } from '../../../../webModel/Utility/PathCreator/Path';
import { MapArea } from '../../../../webModel/Utility/PathCreator/areas';
declare var $: any;

declare global {
  interface JQuery {
    mapster(): JQuery;
  }
}


@Component({
    selector: 'app-create-path',
    templateUrl: './create-path.component.html',
  styleUrls: ['./create-path.component.scss'],
  animations: [
    stagger80ms,
    fadeInUp400ms,
    scaleIn400ms,
    fadeInRight400ms
  ]
})
/** create-path component*/
export class CreatePathComponent implements OnInit {
  pathToCreate: Path;
  monsterLevelToCreate: SpecificMonsterLevel;
  monsterQuantityToCreate: SpecificMonsterQuantity;
  monsterCaptureToCreate: CaptureMonsterQuantity;
  lisType = [
    { id: 0 }, { id: 1 }
  ]

  
 

  icPlus = icPlus;
  icDoneAll = icDoneAll;
  icLeftArrow = icLeftArrow;
  icTopArrow = icTopArrow;
  icDelete = icDelete;
  icRightArrow = icRightArrow;
  icBottomArrow = icBottomArrow;
  directionTop: boolean = false;
  directionRight: boolean = false;
  directionBottom: boolean = false;
  directionLeft: boolean = false;



  zoneChoose;
  statePath;
  rightClickPos: string;
    /** create-path ctor */
  constructor(private fb: FormBuilder, private pathService: PathService) {
    this.pathToCreate = new Path;
  }
  ngOnInit() {
    this.monsterLevelToCreate = new SpecificMonsterLevel;
    this.monsterQuantityToCreate= new SpecificMonsterQuantity;
    this.monsterCaptureToCreate = new CaptureMonsterQuantity;
    this.pathToCreate.monsterLevel = [];
    this.pathToCreate.monsterQuantity = [];
    this.pathToCreate.monsterCapture = [];
    this.pathToCreate.pathAction = [];
  }

 

  ngAfterViewInit() {
    var self = this;
      $(document).ready(function () {
        $('#zone1').mapster({
          mapKey: 'data-key',
          showToolTip: true,
          fillOpacity: 0.6,
          areas: MapArea.mapAreaBonta,
          onClick: function (e) {

            if (e.selected ) {
              $('#zone1').mapster('set', true, e.key, { fillColor: 'FA2744' } );
              $('#zone1Banque').mapster('set', true, e.key, { fillColor: 'FA2744'});
              $('#zone1Retour').mapster('set', true, e.key, { fillColor: 'FA2744' });
              return false;
            }
            else {
              $('#zone1Banque').mapster('set', false, e.key);
              $('#zone1Retour').mapster('set', false, e.key);
            }
          }
        });
        $('#zone1Banque').mapster({
          mapKey: 'data-key',
          showToolTip: true,
          fillOpacity: 0.6,
          areas: MapArea.mapAreaBonta,
          onClick: function (e) {
            if (e.selected) {
              $('#zone1Banque').mapster('set', true, e.key, { fillColor: '007F40'});
              return false;
            }
            else {
              if ($('#zone1').mapster('get_options', e.key, true).selected) 
                return false;
              
            }
              }
         

        });
        $('#zone1Retour').mapster({
          mapKey: 'data-key',
          showToolTip: true,
          fillOpacity: 0.6,
          areas: MapArea.mapAreaBonta,
          onClick: function (e) {
            if (e.selected) {
              $('#zone1Retour').mapster('set', true, e.key, { fillColor: '000888' });
              return false;
            }
            else {
              if ($('#zone1').mapster('get_options', e.key, true).selected) 
                return false;
            }
          }
          ,

        });

      });
  }

  submit() {

  }
  
  changeZone(zone) {
  }

  createPathInService() {
    this.pathService.path = this.pathToCreate;
  }


  addMonsterQuantity() {
    this.pathToCreate.monsterQuantity.push(this.monsterQuantityToCreate);
    this.monsterQuantityToCreate = new SpecificMonsterQuantity;
  }
  DeleteQuantityMonster(id) {
    var index = this.pathToCreate.monsterQuantity.findIndex(o => o.monsterId == id);
    if (index != -1)
      this.pathToCreate.monsterQuantity.splice(index, 1);
  }
  addMonsterLevel() {
    this.pathToCreate.monsterLevel.push(this.monsterLevelToCreate);
    this.monsterLevelToCreate = new SpecificMonsterLevel;
  }
  DeleteLevelMonster(id) {
    var index = this.pathToCreate.monsterLevel.findIndex(o => o.monsterId == id);
    if (index != -1)
      this.pathToCreate.monsterLevel.splice(index, 1);
  }

  addCaptureMonster() {
    this.pathToCreate.monsterCapture.push(this.monsterCaptureToCreate);
    this.monsterCaptureToCreate = new CaptureMonsterQuantity;
  }
  DeleteCaptureMonster(id) {
    var index = this.pathToCreate.monsterCapture.findIndex(o => o.monsterId == id);
    if (index != -1)
      this.pathToCreate.monsterCapture.splice(index, 1);
  }

  changeStatePath(etat) {
  /*  0 = combat / 1 = recolte  / 2= banque / 3= retour banque */
      this.pathService.statePath = etat;
    
    }

  selectMap(position) {
    this.pathService.receivedActionToadd(position);
  }

  specificAction(data) {
    console.log(data);
    if (data.payload != null)
      this.pathService.receivedSpecificActionToAdd(data.position, data.event, data.payload)
    else
      this.pathService.receivedSpecificActionToAdd(data.position, data.event, null)

  }

  changeDirection(direction: string, valeur: boolean) {
    this.pathService.direction = [];
    if (direction === 'Top')
      this.directionTop = !this.directionTop;
    
    else if (direction === 'Left') 
      this.directionLeft = !this.directionLeft;
    else if (direction === 'Right') 
      this.directionRight = !this.directionRight;
    else if (direction === 'Bottom')
      this.directionBottom = !this.directionBottom;
    if (this.directionTop)
      this.pathService.direction.push('Top');
    if (this.directionLeft)
      this.pathService.direction.push('Left');
    if (this.directionRight)
      this.pathService.direction.push('Right');
    if (this.directionBottom)
      this.pathService.direction.push('Bottom');
  }

  createPath() {

  }


}

