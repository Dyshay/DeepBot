import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Path, PathAction, MapAction, MoveAction, UseItemAction, FightAction, GatherAction, InteractionAction, ZaapAction, ZaapiAction } from '../../webModel/Utility/PathCreator/Path';
import { ToastrService } from 'ngx-toastr';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root',
})
export class PathService {
  statePath: number;
  direction: string[] = [];
  path: Path;
  pathActionToAdd: PathAction = new PathAction;
  mapActionToAdd: MapAction = new MapAction;
  moveActionToAdd: MoveAction = new MoveAction;
  useItemActionToAdd: UseItemAction = new UseItemAction;
  fightActionToAdd: FightAction = new FightAction;
  gatherActionToAdd: GatherAction = new GatherAction;
  interactionActionToAdd: InteractionAction = new InteractionAction;
  zaapActionToAdd: ZaapAction = new ZaapAction;
  zaapiActiontoAdd: ZaapiAction = new ZaapiAction;
  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.toastr.toastrConfig.timeOut = 3300;
    this.toastr.toastrConfig.maxOpened = 4;
    this.toastr.toastrConfig.autoDismiss = true;
    this.toastr.toastrConfig.newestOnTop = true;
    this.toastr.toastrConfig.positionClass ='toast-top-full-width'
  }


  receivedActionToadd(position: string) {
    var index = this.path.pathAction.findIndex(o => o.mapPos == position);
    var toDelete = false;
    if (index !== -1 && this.statePath === 3) {
      console.log(this.path.pathAction[index].actions);
      var index2 = this.path.pathAction[index].actions.findIndex(o => o.moveAction != null && o.moveAction.toGoBank === false);
      if (index2 !== -1) {
        toDelete = true;
      }
    }
    else if (index !== -1 && this.statePath === 2) {
      var index2 = this.path.pathAction[index].actions.findIndex(o => o.moveAction != null && o.moveAction.toBackBank === false);
      if (index2 !== -1) {
        toDelete = true;
      }
    }
    else if (this.statePath === 0 || this.statePath === 1) {
      if (index !== -1)
        toDelete = true;
    }

    /*l'action  sur la map n'existe pas */
    if (toDelete === false) {

    /* création de la map action */
      if (index ===-1)
        this.createActionOnMap(position);

      /* création action combat + move */
      if (this.statePath == 0) {
        this.addFightAction(position)
        if (this.direction.length > 0)
          this.addMoveAction(position);
      }
      else if (this.statePath === 1) {
        this.addGatherAction(position);
      }
      else if ((this.statePath === 2 || this.statePath === 3) && this.direction.length > 0) {
        this.addMoveAction(position);
      }
      else {
        if (this.statePath === 2 )
          this.toastr.warning('Atention map ajoutée au trajet sans aucune action !', 'Ajout map ' + position + ' au trajet retour en banque');
        else
          this.toastr.warning('Atention map ajoutée au trajet sans aucune action !', 'Ajout map ' + position + ' au trajet retour de banque vers zone');
      }
    }
    /* map action to delete */
    else {
      this.deleteActionOnMap(position);
    }
    console.log(this.path);
  }

  receivedSpecificActionToAdd(position, type, payload) {
    var index = this.path.pathAction.findIndex(o => o.mapPos == position)
    if (position.length == 0) {
      this.toastr.error('Position non trouvée, veuillez bien cliquer sur la case ciblé', 'Action non créé');
      return;
    }
    if (index === -1) {
      this.toastr.error('Veuillez selectionner la map (' + position + ') avant de définir une action spécifique', 'Action non créé');
      return;
    }

    if (type === 'separateGroup' || type === 'noFight' || type === 'noGather') {
      this.updateAction(position, type);
    }

    else if (type === 'useItem') {
      this.addUseItemAction(position, payload)
    }
    else if (type === 'useZaap') {
      this.addZaapAction(position, payload);
    }
    else if (type === 'useZaapi') {
      this.addZaapiAction(position, payload);
    }
    else if (type === 'cellMove') {
      for (var i = 0; i < payload.length; i++) {
        this.addMoveAction(position, payload[i]);
      }
    }
    else if (type === 'interaction') {
      this.addInteractionAction(position, payload);

    }
    console.log(this.path);
  }

  updateAction(position, type) {
    if (type === 'separateGroup') {
      this.path.pathAction.find(o => o.mapPos === position).actions.find(o => o.fightAction != null).fightAction.isAlone = true;
      this.toastr.success('Ajout de l"action avec succés', 'Action combattre seul ajouté avec succés en (' + position + ')');
    }
    else if (type === 'noFight') {
      var index = this.path.pathAction.find(o => o.mapPos === position).actions.findIndex(o => o.fightAction != null);
      this.path.pathAction.find(o => o.mapPos === position).actions.splice(index, 1)
      this.toastr.success('Ajout de l"action avec succés', 'Action ne pas combattre ajouté avec succés en (' + position + ')');
    }
    else if (type === 'noGather') {
      var index = this.path.pathAction.find(o => o.mapPos === position).actions.findIndex(o => o.gatherAction != null);
      this.path.pathAction.find(o => o.mapPos === position).actions.splice(index, 1)
      this.toastr.success('Ajout de l"action avec succés', 'Action ne pas récolté ajouté avec succés en (' + position + ')');
    }
  }

  addUseItemAction(position, item) {
    var order = this.getOrdre(position);
    this.useItemActionToAdd = {
      itemId: item
    }
    this.addActionMapOnMap(position, order, this.useItemActionToAdd, 'UseItemAction');
  }
  addZaapAction(position, payload) {
    this.addMoveAction(position, payload.cellId);
    var order = this.getOrdre(position);
    // voir les prop necessaire  pour zaap */ 
    this.zaapActionToAdd = {
      destination: payload.destination,
      zaapId: payload.id
    };
    this.addActionMapOnMap(position, order, this.zaapActionToAdd, 'ZaapAction');
  }

  addInteractionAction(position, payload) {
    var order = this.getOrdre(position);
    this.interactionActionToAdd = {
      interactiveIdObject: payload.interactiveIdObject,
      InteractiveIdResponse: payload.InteractiveIdResponse
    };
    this.addActionMapOnMap(position, order, this.interactionActionToAdd, 'InteractionAction');

  }

  addZaapiAction(position, payload) {

    this.addMoveAction(position, payload.cellId);
    var order = this.getOrdre(position);
    // voir les prop necessaire  pour zaapi */
    this.zaapiActiontoAdd = {
      destination: payload.destination,
      zaapiId: payload.id
    };
    this.addActionMapOnMap(position, order, this.zaapiActiontoAdd, 'ZaapiAction');
  }




  getOrdre(position) {
    var ordre = 1;
    if (this.path.pathAction.find(o => o.mapPos === position).actions.length > 0) {
      ordre = this.path.pathAction.find(o => o.mapPos === position).actions[this.path.pathAction.find(o => o.mapPos === position).actions.length - 1].order + 1;
    }
    return ordre;
  }

  createActionOnMap(position) {
    this.pathActionToAdd = {
      actions: [],
      mapPos: position
    }
    this.path.pathAction.push(this.pathActionToAdd);
  }
  deleteActionOnMap(position) {
    var index = this.path.pathAction.findIndex(o => o.mapPos === position);
    this.path.pathAction.splice(index, 1);
    if (index != -1)
      this.toastr.success('', 'Action supprimé avec succés');
  }
  addActionMapOnMap(position, order, action, type) {
    if (type === 'MoveAction') {
      this.path.pathAction.find(o => o.mapPos === position).actions.push({
        order: order,
        moveAction: action
      });
      if (this.direction.length === 0 && action.cellId === null) {
        this.toastr.warning('Atention aucune direction selectionnée !', 'Action déplacement ajouté avec succés en (' + position + ')');
      }
      else if (this.direction.length !== 0) {
        this.toastr.success('Direction : ' + this.direction.join(), 'Action déplacement ajouté avec succés en (' + position + ')');
      }
      else {
        this.toastr.success('Cell : ' + action.cellId, 'Action déplacement ajouté avec succés en (' + position + ')');
      }
    }
    else if (type === 'UseItemAction') {
      this.path.pathAction.find(o => o.mapPos === position).actions.push({
        order: order,
        useItemAction: action
      });
      this.toastr.success('Ajout de l"action avec succés', 'Action utiliser (' + action.itemId + ') ajouté avec succés en (' + position + ')');
    }
    else if (type === 'FightAction') {
      this.path.pathAction.find(o => o.mapPos === position).actions.push({
        order: order,
        fightAction: action
      });
      if (this.direction.length == 0) {
        this.toastr.warning('Atention aucune direction selectionnée !', 'Action combat ajouté avec succés en (' + position + ')');
      }
      else {
        this.toastr.success('', 'Action combat ajouté avec succés en (' + position + ')');
      }
    }
    else if (type === 'GatherAction') {
      this.path.pathAction.find(o => o.mapPos === position).actions.push({
        order: order,
        gatherAction: action
      });
      if (this.direction.length == 0) {
        this.toastr.warning('Atention aucune direction selectionnée !', 'Action récolte ajouté avec succés en (' + position + ')');
      }
      else {
        this.toastr.success('', 'Action récolte ajouté avec succés en (' + position + ')');
      }
    }
    else if (type === 'InteractionAction') {
      this.path.pathAction.find(o => o.mapPos === position).actions.push({
        order: order,
        interactionAction: action
      });
      this.toastr.success('', 'Action Interaction ajouté avec succés en (' + position + '), interaction ( objet/pnj :' + action.interactiveIdObject + ' , action : ' + action.InteractiveIdResponse +')');
    }
    else if (type === 'ZaapAction') {
      this.path.pathAction.find(o => o.mapPos === position).actions.push({
        order: order,
        zaapAction: action
      });
      this.toastr.success('', 'Action zaap ajouté avec succés en (' + position + ') destination ( ' + action.destination +')' );
    }
    else if (type === 'ZaapiAction') {
      this.path.pathAction.find(o => o.mapPos === position).actions.push({
        order: order,
        zaapiAction: action
      });
      console.log('addzaapi');
      this.toastr.success('', 'Action zaapi ajouté avec succés en (' + position + ') destination ( ' + action.destination + ')');
    }
  }


  addMoveAction(position, cell: number = null) {
    var ordre = this.getOrdre(position);
    if (this.statePath === 2) {
      if (cell === null)
        this.moveActionToAdd = {
          direction: this.direction,
          toGoBank: true,
          toBackBank: false
        }
      else
        this.moveActionToAdd = {
          cellId: cell,
          toGoBank: true,
          toBackBank: false
        }

    }
    else if (this.statePath === 3) {
      if (cell == null)
        this.moveActionToAdd = {
          direction: this.direction,
          toGoBank: false,
          toBackBank: true
        }
      else
        this.moveActionToAdd = {
          cellId: cell,
          toGoBank: true,
          toBackBank: false
        }
    }
    else {
      if (cell === null)
        this.moveActionToAdd = {
          direction: this.direction,
          toGoBank: false,
          toBackBank: false
        }
      else
        this.moveActionToAdd = {
          cellId: cell,
          toGoBank: true,
          toBackBank: false
        }
    }

    this.addActionMapOnMap(position, ordre, this.moveActionToAdd, 'MoveAction');
  }

  addFightAction(position) {
    var ordre = this.getOrdre(position)

    this.fightActionToAdd = {
      isAlone: false
    };
    this.addActionMapOnMap(position, ordre, this.fightActionToAdd, 'FightAction');

  }
  addGatherAction(position) {
    var ordre = this.getOrdre(position)
    this.gatherActionToAdd = {};
    this.addActionMapOnMap(position, ordre, this.gatherActionToAdd, 'GatherAction');

  }


}
