import { Component, Inject, ChangeDetectorRef, OnInit, AfterViewInit } from '@angular/core';
import { PathInterface } from '../../../../../webModel/Interface/path';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder } from '@angular/forms';
import 'jquery';
import { PathService } from '../../../../services/path.service';
declare var $: any;
import icPlus from '@iconify/icons-ic/baseline-add';
import icDoneAll from '@iconify/icons-ic/twotone-done-all';
import icLeftArrow from '@iconify/icons-ic/twotone-keyboard-arrow-left'
import icTopArrow from '@iconify/icons-ic/twotone-keyboard-arrow-up'
import icRightArrow from '@iconify/icons-ic/twotone-keyboard-arrow-right'
import icBottomArrow from '@iconify/icons-ic/twotone-keyboard-arrow-down'
import icDelete from '@iconify/icons-fa-solid/trash';
import { stagger80ms } from '../../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { scaleIn400ms } from '../../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import { Path, SpecificMonsterLevel, SpecificMonsterQuantity, CaptureMonsterQuantity, MapAction } from '../../../../../webModel/Utility/PathCreator/Path';
import { MapArea } from '../../../../../webModel/Utility/PathCreator/areas';
import * as frompath from 'src/app/app-reducers/path/reducers';
import { PathActions } from 'src/app/app-reducers/path/actions';
import { Store, select } from '@ngrx/store';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { delay } from 'rxjs/operators';
import { JobsGather } from '../../../../../webModel/Job';
import bucheron from '@iconify/icons-mdi/hand-saw';
import paysan from '@iconify/icons-emojione-monotone/ear-of-corn';
import mineur from '@iconify/icons-mdi/pickaxe';
import chasseur from '@iconify/icons-whh/bow';
import pecheur from '@iconify/icons-mdi/fish';
import alchimiste from '@iconify/icons-mdi/flower';
import bricoleur from '@iconify/icons-mdi/hammer';
import bijoutier from '@iconify/icons-mdi/ring';
import cordonnier from '@iconify/icons-mdi/shoe-formal';
import tailleur from '@iconify/icons-mdi/hat-fedora';
import sculteur from '@iconify/icons-whh/arrowdown'; // a modif
import forgeur from '@iconify/icons-whh/arrowdown'; // a modif
import forgeurbouclier from '@iconify/icons-mdi/shield';
import cordomage from '@iconify/icons-whh/arrowdown'; // a modif
import costumage from '@iconify/icons-fa-solid/hat-wizard';
import jaillomage from '@iconify/icons-map/jewelry-store';
import theme from '../../../../../@vex/utils/tailwindcss';
import { AlchimisteRessources, PaysanRessources, MineurRessources, PecheurRessources, BucheronRessources } from '../../../../../webModel/Enum/RessourcesMetier';
import { TranslateService } from '@ngx-translate/core';

declare global {
  interface JQuery {
    mapster(): JQuery;
  }
}

@Component({
    selector: 'app-modal-update-path',
    templateUrl: './modal-update-path.component.html',
  styleUrls: ['./modal-update-path.component.scss'],
  animations: [
    stagger80ms,
    fadeInUp400ms,
    scaleIn400ms,
    fadeInRight400ms
  ]
})
/** modal-update-path component*/
export class ModalUpdatePathComponent implements OnInit,AfterViewInit {
  pathToUpdate: Path = null;
  monsterLevelToCreate: SpecificMonsterLevel;
  monsterQuantityToCreate: SpecificMonsterQuantity;
  monsterCaptureToCreate: CaptureMonsterQuantity;
  icPlus = icPlus;
  icDoneAll = icDoneAll;
  icLeftArrow = icLeftArrow;
  icTopArrow = icTopArrow;
  icDelete = icDelete;
  icRightArrow = icRightArrow;
  icBottomArrow = icBottomArrow;
  theme = theme;
  bucheron = bucheron;
  paysan = paysan;
  mineur = mineur;
  chasseur = chasseur;
  pecheur = pecheur;
  alchimiste = alchimiste;
  bricoleur = bricoleur;
  bijoutier = bijoutier;
  cordonnier = cordonnier;
  tailleur = tailleur;
  sculteur = sculteur;
  forgeur = forgeur;
  forgeurbouclier = forgeurbouclier;
  cordomage = cordomage;
  costumage = costumage;
  jaillomage = jaillomage;
  directionTop: boolean = false;
  directionRight: boolean = false;
  directionBottom: boolean = false;
  directionLeft: boolean = false;
  isLoaded: boolean = false;
  lisType = [
    { id: 0 }, { id: 1 }
  ]
  public jobEnum = JobsGather

  zoneChoose;
  statePath;
  rightClickPos: string;
  zone1Alreadyloaded: boolean = false;
  zone2Alreadyloaded: boolean = false;
  zone3Alreadyloaded: boolean = false;
  ressourcesPaysan = PaysanRessources;
  ressourcesBucheron = BucheronRessources;
  ressourcesMineur = MineurRessources;
  ressourcesPecheur = PecheurRessources;
  ressourcesAlchimiste = AlchimisteRessources;
  bucheronSelected: boolean = false;
  mineurSelected: boolean = false;
  paysanSelected: boolean = false;
  pecheurSelected: boolean = false;
  alchimisteSelected: boolean = false;

    /** modal-update-path ctor */
  constructor(private cd: ChangeDetectorRef, private pathService: PathService, private translateService: TranslateService, private storePath: Store<frompath.State>, private loader: SpinnerVisibilityService,
    private dialogRef: MatDialogRef<ModalUpdatePathComponent>,
    @Inject(MAT_DIALOG_DATA) private pathKey: PathInterface['key'], private fb: FormBuilder) {
    this.pathToUpdate = new Path();
    pathService.changePathUpdateEmitted$.subscribe(
      (result) => {
        this.pathToUpdate = result;
      }
    );
    this.pathService.changeJobEmitted$.subscribe(
      (result) => {
        switch (result) {
          case this.translateService.instant('CREATEPATH.JOB_PAYSAN'): {
            this.paysanSelected = !this.paysanSelected;
          }
            break;
          case this.translateService.instant('CREATEPATH.JOB_PECHEUR'): {
            this.pecheurSelected = !this.pecheurSelected;
          }
            break;
          case this.translateService.instant('CREATEPATH.JOB_BUCHERON'): {
            this.bucheronSelected = !this.bucheronSelected;
          }
            break;
          case this.translateService.instant('CREATEPATH.JOB_MINEUR'): {
            this.mineurSelected = !this.mineurSelected;
          }
            break;
          case this.translateService.instant('CREATEPATH.JOB_ALCHIMISTE'): {
            this.alchimisteSelected = !this.alchimisteSelected;
          }
            break;
          default:
        }
      });
  }
  async ngOnInit() {
    this.monsterLevelToCreate = new SpecificMonsterLevel;
    this.monsterQuantityToCreate = new SpecificMonsterQuantity;
    this.monsterCaptureToCreate = new CaptureMonsterQuantity;
    await this.storePath.dispatch(PathActions.getPathByKey({ keyPath: this.pathKey }));
  }
 async ngAfterViewInit() {

  }
  isRessourceUsed(ressource, job) {
    var ressourceId = null;
    if (job == 36) {
      ressourceId = this.ressourcesPecheur[ressource];
    }
    /* mineur */
    else if (job == 24) {
      ressourceId = this.ressourcesMineur[ressource];
    }
    /* bucheron */
    else if (job == 2) {
      ressourceId = this.ressourcesBucheron[ressource];
    }
    /* paysan */
    else if (job == 28) {
      ressourceId = this.ressourcesPaysan[ressource];
    }
    /* alchimiste */
    else if (job == 26) {
      ressourceId = this.ressourcesAlchimiste[ressource];
    }
    if (this.pathToUpdate.listRessource.findIndex(o => o == ressourceId) != -1) {
      if (job == 24 && !this.mineurSelected)
        this.mineurSelected = true;
      if (job == 36 && !this.pecheurSelected)
        this.pecheurSelected = true;
      if (job == 26 && !this.alchimisteSelected)
        this.alchimisteSelected = true;
      if (job == 2 && !this.bucheronSelected)
        this.bucheronSelected = true;
      if (job == 28 && !this.paysanSelected)
        this.paysanSelected = true;
      return true;
    }
    else
      return false;
  }

  getRessource(ressource) {
    return this.translateService.instant('CREATEPATH.' + ressource);
  }
  selectRessource(ressource, jobId) {
    var ressourceId;
    /* pecheur */
    if (jobId == 36) {
      ressourceId = this.ressourcesPecheur[ressource];
    }
    /* mineur */
    else if (jobId == 24) {
      ressourceId = this.ressourcesMineur[ressource];
    }
    /* bucheron */
    else if (jobId == 2) {
      ressourceId = this.ressourcesBucheron[ressource];
    }
    /* paysan */
    else if (jobId == 28) {
      ressourceId = this.ressourcesPaysan[ressource];
    }
    /* alchimiste */
    else if (jobId == 26) {
      ressourceId = this.ressourcesAlchimiste[ressource];
    }

    if (this.pathToUpdate.listRessource.find(o => o == ressourceId) == null) {

      this.pathToUpdate.listRessource.push(ressourceId)
    }
    else {
      var index = (this.pathToUpdate.listRessource.findIndex(o => o == ressourceId));
      this.pathToUpdate.listRessource.splice(index, 1);
    }
    console.log(this.pathToUpdate.listRessource);
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
    for (var i = 0; i < this.pathToUpdate.pathAction.length; i++) {
      var key = this.pathToUpdate.pathAction[i].mapPos;
      var actions = this.pathToUpdate.pathAction[i].actions;
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
    var retour=null;
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
        if (retour!=null)
          retour = 4;
        else
          retour = 2;
      }
      else if (actions[i].interactionAction ? actions[i].interactionAction.toBackBank == true:false) {
        if (retour != null)
          retour = 4;
        else
          retour = 3;
      }
      else if (actions[i].moveAction ? actions[i].moveAction.toGoBank == true:false) {
        if (retour != null)
          retour = 4;
        else
          retour = 2;
      }
      else if (actions[i].moveAction ? actions[i].moveAction.toBackBank == true:false) {
        if (retour != null)
          retour = 4;
        else
          retour = 3;
      }
      else if (actions[i].useItemAction ? actions[i].useItemAction.toBackBank == true:false) {
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
      else if (actions[i].zaapAction ? actions[i].zaapAction.toBackBank == true:false) {
        if (retour != null)
          retour = 4;
        else
          retour = 3;
      }
      else if (actions[i].zaapAction ? actions[i].zaapAction.toGoBank == true:false) {
        if (retour != null)
          retour = 4;
        else
          retour = 2;
      }
      else if (actions[i].zaapiAction ? actions[i].zaapiAction.toBackBank == true:false) {
        if (retour != null)
          retour = 4;
        else
          retour = 3;
      }
      else if (actions[i].zaapiAction ? actions[i].zaapiAction.toGoBank == true:false) {
        if (retour != null)
          retour = 4;
        else
          retour = 2;
      }
    }
    return retour;
  }

  addMonsterQuantity() {
    this.pathToUpdate.monsterQuantity.push(this.monsterQuantityToCreate);
    this.monsterQuantityToCreate = new SpecificMonsterQuantity;
  }
  DeleteQuantityMonster(id) {
    var index = this.pathToUpdate.monsterQuantity.findIndex(o => o.monsterId == id);
    if (index != -1)
      this.pathToUpdate.monsterQuantity.splice(index, 1);
  }
  addMonsterLevel() {
    this.pathToUpdate.monsterLevel.push(this.monsterLevelToCreate);
    this.monsterLevelToCreate = new SpecificMonsterLevel;
  }
  DeleteLevelMonster(id) {
    var index = this.pathToUpdate.monsterLevel.findIndex(o => o.monsterId == id);
    if (index != -1)
      this.pathToUpdate.monsterLevel.splice(index, 1);
  }

  addCaptureMonster() {
    this.pathToUpdate.monsterCapture.push(this.monsterCaptureToCreate);
    this.monsterCaptureToCreate = new CaptureMonsterQuantity;
  }
  DeleteCaptureMonster(id) {
    var index = this.pathToUpdate.monsterCapture.findIndex(o => o.monsterId == id);
    if (index != -1)
      this.pathToUpdate.monsterCapture.splice(index, 1);
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

  updatePath() {
    let updatedPath = this.pathToUpdate;
    this.storePath.dispatch(PathActions.updatePath({ updatedPath: JSON.parse(JSON.stringify(updatedPath)) }));
    this.dialogRef.close();
  }
  DeletePath() {
    let pathKeyToDelete = this.pathToUpdate.key;
    this.storePath.dispatch(PathActions.deletePath({ pathKeyToDelete }));
    this.dialogRef.close();
  }
}
