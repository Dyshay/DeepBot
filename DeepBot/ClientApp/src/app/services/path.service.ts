import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Path, PathAction, MapAction, MoveAction, UseItemAction, FightAction, GatherAction, InteractionAction } from '../../webModel/Utility/PathCreator/Path';
import { ToastrService } from 'ngx-toastr';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root',
})
export class PathService {
  statePath: number;
  direction: string[]=[];
  path: Path;
  pathActionToAdd: PathAction = new PathAction;
  mapActionToAdd: MapAction =new MapAction;
  moveActionToAdd: MoveAction = new MoveAction;
  useItemActionToAdd: UseItemAction = new UseItemAction;
  fightActionToAdd: FightAction = new FightAction;
  gatherActionToAdd: GatherAction = new GatherAction;
  interactionActionToAdd: InteractionAction = new InteractionAction;
  constructor(private http: HttpClient, private toastr: ToastrService) {

  }
  
/* action id 
 1 = séparation groupe

*/
  receivedActionToadd(position: string) {
    var index = this.path.pathAction.findIndex(o => o.mapPos == position)

    /*l'action  sur la map n'existe pas */ 
    if (index == -1) {

    /* création de la map action */
      this.createActionOnMap(position);

      /* ajout de l'action sur la map action

      /* création action combat + move */
      if (this.statePath == 0) {
        this.addFightAction(position)
        if(this.direction.length>0)
        this.addMoveAction(position);
      }
      else if (this.statePath === 1) {
        this.addGatherAction(position);
      }
      else if ((this.statePath === 2 || this.statePath === 3) && this.direction.length>0 ) {
        this.addMoveAction(position);
      }
    }
    /* map action to delete */ 
    else {
      this.deleteActionOnMap(position);
    }
    console.log(this.path);
  }

  receivedSpecificActionToAdd(position, type, payload) {
    console.log(position + ' //' + type + ' // ')
    console.log(payload);
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

    }
    else if (type === 'cellMove') {

    }
    else if (type === 'interaction') {

    }
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
    this.path.pathAction.find(o => o.mapPos === position).actions.push({
      order: order,
      useItemAction: {
        itemId: item
      }
    });
    this.toastr.success('Ajout de l"action avec succés', 'Action utiliser (' + item +') ajouté avec succés en (' + position + ')');
  }
  addZaapAction(position,payload) {


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
      if (this.direction.length == 0) {
        this.toastr.warning('Atention aucune direction selectionnée !', 'Action déplacement ajouté avec succés en (' + position + ')');
      }
      else {
        this.toastr.success('Direction : ' + this.direction.join(), 'Action déplacement ajouté avec succés en (' + position + ')');
      }
    }
    else if (type === 'UseItemAction') {
      this.path.pathAction.find(o => o.mapPos === position).actions.push({
        order: order,
        useItemAction: action
      })
    }

    else if (type === 'FightAction') {
      this.path.pathAction.find(o => o.mapPos === position).actions.push({
        order: order,
        fightAction: action
      });
      if (this.direction.length == 0) {
        this.toastr.warning('Atention aucune direction selectionnée !', 'Action combat ajouté avec succés en ('+position+')');
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
      })
    }
  }

  addMoveAction(position) {
    var ordre = this.getOrdre(position);
    console.log(this.statePath);
    if (this.statePath === 2) {
      this.moveActionToAdd = {
        direction: this.direction,
        toGoBank: true,
        toBackBank: false
      }

    }
    else if (this.statePath === 3) {
      this.moveActionToAdd = {
        direction: this.direction,
        toGoBank: false,
        toBackBank: true
      }
    }
    else
      this.moveActionToAdd = {
        direction: this.direction,
        toGoBank: false,
        toBackBank: false
      }
    this.addActionMapOnMap(position, ordre, this.moveActionToAdd,'MoveAction');
  }

  addFightAction(position) {
    var ordre = this.getOrdre(position)

    this.fightActionToAdd = {
      isAlone: false
    };
    this.addActionMapOnMap(position, ordre, this.fightActionToAdd,'FightAction');

  }
  addGatherAction(position) {
    var ordre = this.getOrdre(position)
    this.gatherActionToAdd = {};
    this.addActionMapOnMap(position, ordre, this.gatherActionToAdd, 'GatherAction');

  }


}
