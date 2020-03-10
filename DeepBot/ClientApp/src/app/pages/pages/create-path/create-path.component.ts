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
import * as frompath from 'src/app/app-reducers/path/reducers';
import { PathActions } from 'src/app/app-reducers/path/actions';
import { Store } from '@ngrx/store';
import { PathService } from '../../../services/path.service';
import { Path, SpecificMonsterLevel, SpecificMonsterQuantity, CaptureMonsterQuantity, PathAction, MoveAction, UseItemAction, FightAction, GatherAction, InteractionAction, MapAction } from '../../../../webModel/Utility/PathCreator/Path';
import { MapArea } from '../../../../webModel/Utility/PathCreator/areas';
import 'jquery';
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

  zone1Alreadyloaded: boolean = false;
  zone2Alreadyloaded: boolean = false;
  zone3Alreadyloaded: boolean = false;

  zoneChoose;
  statePath;
  rightClickPos: string;
    /** create-path ctor */
  constructor(private fb: FormBuilder, private pathService: PathService, private storePath: Store<frompath.State>) {
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


  zoneChanged(event) {
    if (event.value == 0 && !this.zone1Alreadyloaded) {
      $('#zone1').mapster({
        mapKey: 'data-key',
        showToolTip: true,
        fillOpacity: 0.6,
        areas: MapArea.mapArea,
        onClick: function (e) {
          if (e.selected) {
            $('#zone1').mapster('set', true, e.key, { fillColor: 'FA2744' });
            $('#zone1Banque').mapster('set', true, e.key, { fillColor: 'FA2744' });
            $('#zone1Retour').mapster('set', true, e.key, { fillColor: 'FA2744' });
            $('#zone2').mapster('set', true, e.key, { fillColor: 'FA2744' });
            $('#zone2Banque').mapster('set', true, e.key, { fillColor: 'FA2744' });
            $('#zone2Retour').mapster('set', true, e.key, { fillColor: 'FA2744' });
            $('#zone3').mapster('set', true, e.key, { fillColor: 'FA2744' });
            $('#zone3Banque').mapster('set', true, e.key, { fillColor: 'FA2744' });
            $('#zone3Retour').mapster('set', true, e.key, { fillColor: 'FA2744' });
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
        areas: MapArea.mapArea,
        onClick: function (e) {
          if (e.selected) {
            $('#zone1Banque').mapster('set', true, e.key, { fillColor: '007F40' });
            $('#zone2Banque').mapster('set', true, e.key, { fillColor: '007F40' });
            $('#zone3Banque').mapster('set', true, e.key, { fillColor: '007F40' });
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
        areas: MapArea.mapArea,
        onClick: function (e) {
          if (e.selected) {
            $('#zone1Retour').mapster('set', true, e.key, { fillColor: '000888' });
            $('#zone2Retour').mapster('set', true, e.key, { fillColor: '000888' });
            $('#zone3Retour').mapster('set', true, e.key, { fillColor: '000888' });
            return false;
          }
          else {
            if ($('#zone1').mapster('get_options', e.key, true).selected)
              return false;
          }
        }
        ,

      });
      this.loadArea(event.value);
    }
    else if (event.value == 1 && !this.zone2Alreadyloaded) {
      $('#zone2').mapster({
        mapKey: 'data-key',
        showToolTip: true,
        fillOpacity: 0.6,
        areas: MapArea.mapArea,
        onClick: function (e) {
          if (e.selected) {
            $('#zone1').mapster('set', true, e.key, { fillColor: 'FA2744' });
            $('#zone1Banque').mapster('set', true, e.key, { fillColor: 'FA2744' });
            $('#zone1Retour').mapster('set', true, e.key, { fillColor: 'FA2744' });
            $('#zone2').mapster('set', true, e.key, { fillColor: 'FA2744' });
            $('#zone2Banque').mapster('set', true, e.key, { fillColor: 'FA2744' });
            $('#zone2Retour').mapster('set', true, e.key, { fillColor: 'FA2744' });
            $('#zone3').mapster('set', true, e.key, { fillColor: 'FA2744' });
            $('#zone3Banque').mapster('set', true, e.key, { fillColor: 'FA2744' });
            $('#zone3Retour').mapster('set', true, e.key, { fillColor: 'FA2744' });
            return false;
          }
          else {
            $('#zone2Banque').mapster('set', false, e.key);
            $('#zone2Retour').mapster('set', false, e.key);
          }
        }
      });
      $('#zone2Banque').mapster({
        mapKey: 'data-key',
        showToolTip: true,
        fillOpacity: 0.6,
        areas: MapArea.mapArea,
        onClick: function (e) {
          if (e.selected) {
            $('#zone1Banque').mapster('set', true, e.key, { fillColor: '007F40' });
            $('#zone2Banque').mapster('set', true, e.key, { fillColor: '007F40' });
            $('#zone3Banque').mapster('set', true, e.key, { fillColor: '007F40' });
            return false;
          }
          else {
            if ($('#zone2').mapster('get_options', e.key, true).selected)
              return false;
          }
        }
      });
      $('#zone2Retour').mapster({
        mapKey: 'data-key',
        showToolTip: true,
        fillOpacity: 0.6,
        areas: MapArea.mapArea,
        onClick: function (e) {
          if (e.selected) {
            $('#zone1Retour').mapster('set', true, e.key, { fillColor: '000888' });
            $('#zone2Retour').mapster('set', true, e.key, { fillColor: '000888' });
            $('#zone3Retour').mapster('set', true, e.key, { fillColor: '000888' });
            return false;
          }
          else {
            if ($('#zone2').mapster('get_options', e.key, true).selected)
              return false;
          }
        }
      });
      this.loadArea(event.value);
    }
    else if (event.value == 2 && !this.zone3Alreadyloaded) {
      $('#zone3').mapster({
        mapKey: 'data-key',
        showToolTip: true,
        fillOpacity: 0.6,
        areas: MapArea.mapArea,
        onClick: function (e) {
          if (e.selected) {
            $('#zone1').mapster('set', true, e.key, { fillColor: 'FA2744' });
            $('#zone1Banque').mapster('set', true, e.key, { fillColor: 'FA2744' });
            $('#zone1Retour').mapster('set', true, e.key, { fillColor: 'FA2744' });
            $('#zone2').mapster('set', true, e.key, { fillColor: 'FA2744' });
            $('#zone2Banque').mapster('set', true, e.key, { fillColor: 'FA2744' });
            $('#zone2Retour').mapster('set', true, e.key, { fillColor: 'FA2744' });
            $('#zone3').mapster('set', true, e.key, { fillColor: 'FA2744' });
            $('#zone3Banque').mapster('set', true, e.key, { fillColor: 'FA2744' });
            $('#zone3Retour').mapster('set', true, e.key, { fillColor: 'FA2744' });
            return false;
          }
          else {
          }
        }
      });
      $('#zone3Banque').mapster({
        mapKey: 'data-key',
        showToolTip: true,
        fillOpacity: 0.6,
        areas: MapArea.mapArea,
        onClick: function (e) {
          if (e.selected) {
            $('#zone1Banque').mapster('set', true, e.key, { fillColor: '007F40' });
            $('#zone2Banque').mapster('set', true, e.key, { fillColor: '007F40' });
            $('#zone3Banque').mapster('set', true, e.key, { fillColor: '007F40' });
            return false;
          }
          else {
            if ($('#zone3').mapster('get_options', e.key, true).selected)
              return false;

          }
        }


      });
      $('#zone3Retour').mapster({
        mapKey: 'data-key',
        showToolTip: true,
        fillOpacity: 0.6,
        areas: MapArea.mapArea,
        onClick: function (e) {
          if (e.selected) {
            $('#zone1Retour').mapster('set', true, e.key, { fillColor: '000888' });
            $('#zone2Retour').mapster('set', true, e.key, { fillColor: '000888' });
            $('#zone3Retour').mapster('set', true, e.key, { fillColor: '000888' });
            return false;
          }
          else {
            if ($('#zone3').mapster('get_options', e.key, true).selected)
              return false;
          }
        }
        ,

      });
      this.loadArea(event.value);
    }
  }

  loadArea(zone) {
    for (var i = 0; i < this.pathToCreate.pathAction.length; i++) {
      var key = this.pathToCreate.pathAction[i].mapPos;
      var actions = this.pathToCreate.pathAction[i].actions;
      var type = this.StateAction(actions);
      if (type == 0) {
        if (zone == 0 && !this.zone1Alreadyloaded) {
          $('#zone1').mapster('set', true, key, { fillColor: 'FA2744' });
          $('#zone1Banque').mapster('set', true, key, { fillColor: 'FA2744' });
          $('#zone1Retour').mapster('set', true, key, { fillColor: 'FA2744' });
        }
        else if (zone == 1 && !this.zone2Alreadyloaded) {
          $('#zone2').mapster('set', true, key, { fillColor: 'FA2744' });
          $('#zone2Banque').mapster('set', true, key, { fillColor: 'FA2744' });
          $('#zone2Retour').mapster('set', true, key, { fillColor: 'FA2744' });
        }
        else if (zone == 2 && !this.zone3Alreadyloaded) {
          $('#zone3').mapster('set', true, key, { fillColor: 'FA2744' });
          $('#zone3Banque').mapster('set', true, key, { fillColor: 'FA2744' });
          $('#zone3Retour').mapster('set', true, key, { fillColor: 'FA2744' });
        }
      }
      else if (type == 2) {
        if (zone == 0 && !this.zone1Alreadyloaded) {
          $('#zone1Banque').mapster('set', true, key, { fillColor: '007F40' });
        }
        else if (zone == 1 && !this.zone2Alreadyloaded) {
          $('#zone2Banque').mapster('set', true, key, { fillColor: '007F40' });
        }
        else if (zone == 2 && !this.zone3Alreadyloaded) {
          $('#zone3Banque').mapster('set', true, key, { fillColor: '007F40' });
        }
      }
      else if (type == 3) {
        if (zone == 0 && !this.zone1Alreadyloaded) {
          $('#zone1Retour').mapster('set', true, key, { fillColor: '000888' });
        }
        else if (zone == 1 && !this.zone2Alreadyloaded) {
          $('#zone2Retour').mapster('set', true, key, { fillColor: '000888' });
        }
        else if (zone == 2 && !this.zone3Alreadyloaded) {
          $('#zone3Retour').mapster('set', true, key, { fillColor: '000888' });
        }
      }
      else if (type == 4) {
        if (zone == 0 && !this.zone1Alreadyloaded) {
          $('#zone1Retour').mapster('set', true, key, { fillColor: '000888' });
          $('#zone1Banque').mapster('set', true, key, { fillColor: '007F40' });
        }
        else if (zone == 1 && !this.zone2Alreadyloaded) {
          $('#zone2Retour').mapster('set', true, key, { fillColor: '000888' });
          $('#zone2Banque').mapster('set', true, key, { fillColor: '007F40' });
        }
        else if (zone == 2 && !this.zone3Alreadyloaded) {
          $('#zone3Retour').mapster('set', true, key, { fillColor: '000888' });
          $('#zone3Banque').mapster('set', true, key, { fillColor: '007F40' });
        }
      }
    }
    if (zone == 0 && !this.zone1Alreadyloaded)
      this.zone1Alreadyloaded = true;
    if (zone == 1 && !this.zone2Alreadyloaded)
      this.zone2Alreadyloaded = true;
    if (zone == 2 && !this.zone3Alreadyloaded)
      this.zone3Alreadyloaded = true;
  }

  StateAction(actions: MapAction[]) {
    var retour = null;
    for (var i = 0; i < actions.length; i++) {
      if (actions[i].fightAction != null || actions[i].gatherAction) {
        retour = 0;
        break;
      }
      else if (actions[i].bankAction != null) {
        retour = 2;
        break;
      }
      else if (actions[i].interactionAction ? actions[i].interactionAction.toGoBank == true : false) {
        if (retour != null)
          retour = 4;
        else
          retour = 2;
      }
      else if (actions[i].interactionAction ? actions[i].interactionAction.toBackBank == true : false) {
        if (retour != null)
          retour = 4;
        else
          retour = 3;
      }
      else if (actions[i].moveAction ? actions[i].moveAction.toGoBank == true : false) {
        if (retour != null)
          retour = 4;
        else
          retour = 2;
      }
      else if (actions[i].moveAction ? actions[i].moveAction.toBackBank == true : false) {
        if (retour != null)
          retour = 4;
        else
          retour = 3;
      }
      else if (actions[i].useItemAction ? actions[i].useItemAction.toBackBank == true : false) {
        if (retour != null)
          retour = 4;
        else
          retour = 3;
      }
      else if (actions[i].useItemAction ? actions[i].useItemAction.toGoBank == true : false) {
        if (retour != null)
          retour = 4;
        else
          retour = 2;
      }
      else if (actions[i].zaapAction ? actions[i].zaapAction.toBackBank == true : false) {
        if (retour != null)
          retour = 4;
        else
          retour = 3;
      }
      else if (actions[i].zaapAction ? actions[i].zaapAction.toGoBank == true : false) {
        if (retour != null)
          retour = 4;
        else
          retour = 2;
      }
      else if (actions[i].zaapiAction ? actions[i].zaapiAction.toBackBank == true : false) {
        if (retour != null)
          retour = 4;
        else
          retour = 3;
      }
      else if (actions[i].zaapiAction ? actions[i].zaapiAction.toGoBank == true : false) {
        if (retour != null)
          retour = 4;
        else
          retour = 2;
      }
    }
    return retour;
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
    
    let createdPath = this.pathService.path;
    this.storePath.dispatch(PathActions.createPath({ createdPath: JSON.parse(JSON.stringify(createdPath)) }));
  }


}


