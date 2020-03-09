import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Path, PathAction, MapAction, MoveAction, UseItemAction, FightAction, GatherAction, InteractionAction, ZaapAction, ZaapiAction, BankAction, PathMinDisplayed } from '../../webModel/Utility/PathCreator/Path';
import { ToastrService } from 'ngx-toastr';
import { ListBank } from '../../webModel/Utility/PathCreator/Bank';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { TranslateService } from '@ngx-translate/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root',
})
export class PathService {
  statePath: number;
  direction: string[] = [];
  path: Path = new Path;
  pathActionToAdd: PathAction = new PathAction;
  mapActionToAdd: MapAction = new MapAction;
  moveActionToAdd: MoveAction = new MoveAction;
  useItemActionToAdd: UseItemAction = new UseItemAction;
  fightActionToAdd: FightAction = new FightAction;
  gatherActionToAdd: GatherAction = new GatherAction;
  interactionActionToAdd: InteractionAction = new InteractionAction;
  zaapActionToAdd: ZaapAction = new ZaapAction;
  zaapiActiontoAdd: ZaapiAction = new ZaapiAction;
  bankActionToAdd: BankAction = new BankAction;

  constructor(private http: HttpClient, private toastr: ToastrService, private translateService: TranslateService) {
    this.toastr.toastrConfig.timeOut = 3300;
    this.toastr.toastrConfig.maxOpened = 4;
    this.toastr.toastrConfig.autoDismiss = true;
    this.toastr.toastrConfig.newestOnTop = true;
    this.toastr.toastrConfig.positionClass = 'toast-top-full-width'
  }



  createPath(createdPath: any): Observable<any> {
    console.log("tt");
    return this.http.post<any>(`${environment.apiURL}Path/CreatePath`, createdPath, httpOptions)
  }

  
  getAllPaths(): Observable<PathMinDisplayed[]> {
    return this.http.get<PathMinDisplayed[]>(`${environment.apiURL}Path/GetAllPaths`, httpOptions);
  }
  receivedActionToadd(position: string) {
    var index = this.path.pathAction.findIndex(o => o.mapPos == position);
    var toDelete = false;
    var deletedactionsGoBank = false;
    var deletedactionsBackBank = false;
    if (index !== -1 && this.statePath === 3) {
      if (this.path.pathAction[index].actions.length == 0)
        toDelete = true;
      for (var i = 0; i < this.path.pathAction[index].actions.length; i++) {
        if (this.path.pathAction[index].actions[i].interactionAction ? this.path.pathAction[index].actions[i].interactionAction.toBackBank:false) {
          if (this.path.pathAction[index].actions.length == 1) {
            this.deleteActionOnMap(position);
            return;
          }
          else {
            this.path.pathAction[index].actions.splice(i, 1);
            deletedactionsBackBank = true;
            continue;
          }
        }
        if (this.path.pathAction[index].actions[i].moveAction ? this.path.pathAction[index].actions[i].moveAction.toBackBank:false) {
          if (this.path.pathAction[index].actions.length == 1) {
            this.deleteActionOnMap(position);
            return;
          }
          else if (this.path.pathAction[index].actions[i].moveAction.cellId ==null) {
            this.path.pathAction[index].actions.splice(i, 1);
            deletedactionsBackBank = true;
            continue;
          }
        }
        if (this.path.pathAction[index].actions[i].useItemAction ? this.path.pathAction[index].actions[i].useItemAction.toBackBank:false) {
          if (this.path.pathAction[index].actions.length == 1) {
            this.deleteActionOnMap(position);
            return;
          }
          else {
            this.path.pathAction[index].actions.splice(i, 1);
            deletedactionsBackBank = true;
            continue;
          }
        }
        if (this.path.pathAction[index].actions[i].zaapAction ? this.path.pathAction[index].actions[i].zaapAction.toBackBank:false) {
          if (this.path.pathAction[index].actions.length == 1) {
            this.deleteActionOnMap(position);
            return;
          }
          else {
            this.path.pathAction[index].actions.splice(i, 1);
            deletedactionsBackBank = true;
            continue;
          }
        }
        if (this.path.pathAction[index].actions[i].zaapiAction ? this.path.pathAction[index].actions[i].zaapiAction.toBackBank:false) {
          if (this.path.pathAction[index].actions.length == 1) {
            this.deleteActionOnMap(position);
            return;
          }
          else {
            this.path.pathAction[index].actions.splice(i, 1);
            deletedactionsBackBank = true;
            continue;
          }
        }
      }
    }
    else if (index !== -1 && this.statePath === 2) {
      if (this.path.pathAction[index].actions.length == 0)
        toDelete = true;
      for (var i = 0; i < this.path.pathAction[index].actions.length; i++) {
        if (this.path.pathAction[index].actions[i].interactionAction ? this.path.pathAction[index].actions[i].interactionAction.toGoBank:false) {
          if (this.path.pathAction[index].actions.length == 1) {
            this.deleteActionOnMap(position);
            return;
          }
          else {
            this.path.pathAction[index].actions.splice(i, 1);
            deletedactionsGoBank = true;
            continue;
          }
        }
        if (this.path.pathAction[index].actions[i].moveAction ? this.path.pathAction[index].actions[i].moveAction.toGoBank:false) {
          if (this.path.pathAction[index].actions.length == 1) {
            this.deleteActionOnMap(position);
            return;
          }
          else {
            this.path.pathAction[index].actions.splice(i, 1);
            deletedactionsGoBank = true;
            continue;
          }
        }
        if (this.path.pathAction[index].actions[i].useItemAction ? this.path.pathAction[index].actions[i].useItemAction.toGoBank:false) {
          if (this.path.pathAction[index].actions.length == 1) {
            this.deleteActionOnMap(position);
            return;
          }
          else {
            this.path.pathAction[index].actions.splice(i, 1);
            deletedactionsGoBank = true;
            continue;
          }
        }
        if (this.path.pathAction[index].actions[i].zaapAction ? this.path.pathAction[index].actions[i].zaapAction.toGoBank:false) {
          if (this.path.pathAction[index].actions.length == 1) {
            this.deleteActionOnMap(position);
            return;
          }
          else {
            this.path.pathAction[index].actions.splice(i, 1);
            deletedactionsGoBank = true;
            continue;
          }
        }
        if (this.path.pathAction[index].actions[i].zaapiAction ? this.path.pathAction[index].actions[i].zaapiAction.toGoBank:false) {
          if (this.path.pathAction[index].actions.length == 1) {
            this.deleteActionOnMap(position);
            return;
          }
          else {
            this.path.pathAction[index].actions.splice(i, 1);
            deletedactionsGoBank = true;
            continue;
          }
        }
      }
    }
    else if (this.statePath === 0 || this.statePath === 1) {
      if (index !== -1)
        toDelete = true;
    }
    if (deletedactionsGoBank) {
      this.toastr.success('', this.translateService.instant('CREATEPATH.PATHACTIONMSG'));
      return;
    }
    if (deletedactionsBackBank) {
      this.toastr.success('', this.translateService.instant('CREATEPATH.PATHACTIONMSG2'));
      return;
    }

    /*l'action  sur la map n'existe pas */
    if (toDelete === false) {

      /* création de la map action */
      if (index === -1)
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
        if (this.statePath === 2)
          this.toastr.warning(this.translateService.instant('CREATEPATH.PATHACTIONMSG3'), this.translateService.instant('CREATEPATH.PATHACTIONMSG4') + position + this.translateService.instant('CREATEPATH.PATHACTIONMSG5'));
        else
          this.toastr.warning(this.translateService.instant('CREATEPATH.PATHACTIONMSG3'), this.translateService.instant('CREATEPATH.PATHACTIONMSG4') + position + this.translateService.instant('CREATEPATH.PATHACTIONMSG6'));
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
      this.toastr.error(this.translateService.instant('CREATEPATH.PATHACTIONMSG7'), this.translateService.instant('CREATEPATH.PATHACTIONMSG8'));
      return;
    }
    if (index === -1) {
      this.toastr.error(this.translateService.instant('CREATEPATH.PATHACTIONMSG9') + position + this.translateService.instant('CREATEPATH.PATHACTIONMSG10'), this.translateService.instant('CREATEPATH.PATHACTIONMSG8'));
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
        this.addMoveAction(position, payload[i].cellId);
      }
    }
    else if (type === 'interaction') {
      this.addInteractionAction(position, payload);
    }
    else if (type = 'bankProcess') {
      let cellIdEnter = ListBank.Banks.find(o => o.posBank == position).enterBankCellId;
      let MapIdExt = ListBank.Banks.find(o => o.posBank == position).extMapId;
      let MapIdInt = ListBank.Banks.find(o => o.posBank == position).intMapId;
      this.addMoveAction(position, cellIdEnter,false, MapIdExt);
      this.addBankAction(position);
      let cellIdExit = ListBank.Banks.find(o => o.posBank == position).exitBankCellId;
      this.addMoveAction(position, cellIdExit, true, MapIdInt);
    }
  }

  getAlActionsOnMap(position): PathAction {
    return this.path.pathAction.find(o => o.mapPos === position);
  }

  updateAction(position, type) {
    if (type === 'separateGroup') {
      this.path.pathAction.find(o => o.mapPos === position).actions.find(o => o.fightAction != null).fightAction.isAlone = true;
      this.toastr.success(this.translateService.instant('CREATEPATH.PATHACTIONMSG11'), this.translateService.instant('CREATEPATH.PATHACTIONMSG12') + position + ')');
    }
    else if (type === 'noFight') {
      var index = this.path.pathAction.find(o => o.mapPos === position).actions.findIndex(o => o.fightAction != null);
      this.path.pathAction.find(o => o.mapPos === position).actions.splice(index, 1)
      this.toastr.success(this.translateService.instant('CREATEPATH.PATHACTIONMSG11'), this.translateService.instant('CREATEPATH.PATHACTIONMSG13') + position + ')');
    }
    else if (type === 'noGather') {
      var index = this.path.pathAction.find(o => o.mapPos === position).actions.findIndex(o => o.gatherAction != null);
      this.path.pathAction.find(o => o.mapPos === position).actions.splice(index, 1)
      this.toastr.success(this.translateService.instant('CREATEPATH.PATHACTIONMSG11'), this.translateService.instant('CREATEPATH.PATHACTIONMSG14') + position + ')');
    }
  }
  addUseItemAction(position, item) {
    var order = this.getOrdre(position);
    if(this.statePath ==2)
    this.useItemActionToAdd = {
      itemId: item,
      toBackBank: false,
      toGoBank:true
      }
    else
      this.useItemActionToAdd = {
        itemId: item,
        toBackBank: true,
        toGoBank: false
      }
    this.addActionMapOnMap(position, order, this.useItemActionToAdd, 'UseItemAction');
  }
  addZaapAction(position, payload) {
    this.addMoveAction(position, payload.cellId);
    var order = this.getOrdre(position);
    if (this.statePath == 2)
      this.zaapActionToAdd = {
        destination: payload.destination,
        zaapId: payload.id,
        toBackBank: false,
        toGoBank: true
      };
    else
      this.zaapActionToAdd = {
        destination: payload.destination,
        zaapId: payload.id,
        toBackBank: true,
        toGoBank: false
      };
    this.addActionMapOnMap(position, order, this.zaapActionToAdd, 'ZaapAction');
  }
  addInteractionAction(position, payload) {
    var order = this.getOrdre(position);
    if (this.statePath == 2)
      this.interactionActionToAdd = {
        interactiveIdObject: payload.interactiveIdObject,
        interactiveIdResponse: payload.interactiveIdResponse,
        toBackBank: false,
        toGoBank: true
      };
    else
      this.interactionActionToAdd = {
        interactiveIdObject: payload.interactiveIdObject,
        interactiveIdResponse: payload.interactiveIdResponse,
        toBackBank: true,
        toGoBank: false
      };
    this.addActionMapOnMap(position, order, this.interactionActionToAdd, 'InteractionAction');

  }
  addZaapiAction(position, payload) {

    this.addMoveAction(position, payload.cellId);
    var order = this.getOrdre(position);
    if (this.statePath == 2)
      this.zaapiActiontoAdd = {
        destination: payload.destination,
        zaapiId: payload.id,
        toBackBank: false,
        toGoBank: true
      };
    else
      this.zaapiActiontoAdd = {
        destination: payload.destination,
        zaapiId: payload.id,
        toBackBank: true,
        toGoBank: false
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
      this.toastr.success('', this.translateService.instant('CREATEPATH.PATHACTIONMSG15'));
  }
  addActionMapOnMap(position, order, action, type) {
    if (type === 'MoveAction') {
      this.path.pathAction.find(o => o.mapPos === position).actions.push({
        order: order,
        moveAction: action
      });
      if (this.direction.length === 0 && action.cellId === null) {
        this.toastr.warning(this.translateService.instant('CREATEPATH.PATHACTIONMSG20'), this.translateService.instant('CREATEPATH.PATHACTIONMSG21') + position + ')');
      }
      else if (this.direction.length !== 0) {
        this.toastr.success('Direction : ' + this.direction.join(), this.translateService.instant('CREATEPATH.PATHACTIONMSG21') + position + ')');
      }
      else {
        this.toastr.success('Cell : ' + action.cellId, this.translateService.instant('CREATEPATH.PATHACTIONMSG21') + position + ')');
      }
    }
    else if (type === 'UseItemAction') {
      this.path.pathAction.find(o => o.mapPos === position).actions.push({
        order: order,
        useItemAction: action
      });
      this.toastr.success(this.translateService.instant('CREATEPATH.PATHACTIONMSG11'), this.translateService.instant('CREATEPATH.PATHACTIONMSG22') + action.itemId + this.translateService.instant('CREATEPATH.PATHACTIONMSG23') + position + ')');
    }
    else if (type === 'FightAction') {
      this.path.pathAction.find(o => o.mapPos === position).actions.push({
        order: order,
        fightAction: action
      });
      if (this.direction.length == 0) {
        this.toastr.warning(this.translateService.instant('CREATEPATH.PATHACTIONMSG20'), this.translateService.instant('CREATEPATH.PATHACTIONMSG24') + position + ')');
      }
      else {
        this.toastr.success('', this.translateService.instant('CREATEPATH.PATHACTIONMSG24') + position + ')');
      }
    }
    else if (type === 'GatherAction') {
      this.path.pathAction.find(o => o.mapPos === position).actions.push({
        order: order,
        gatherAction: action
      });
      if (this.direction.length == 0) {
        this.toastr.warning(this.translateService.instant('CREATEPATH.PATHACTIONMSG20'), this.translateService.instant('CREATEPATH.PATHACTIONMSG25') + position + ')');
      }
      else {
        this.toastr.success('', this.translateService.instant('CREATEPATH.PATHACTIONMSG25') + position + ')');
      }
    }
    else if (type === 'BankAction') {
      this.path.pathAction.find(o => o.mapPos === position).actions.push({
        order: order,
        bankAction: action
      });
      this.toastr.success('', this.translateService.instant('CREATEPATH.PATHACTIONMSG26') + position + ')');
    }
    else if (type === 'InteractionAction') {
      this.path.pathAction.find(o => o.mapPos === position).actions.push({
        order: order,
        interactionAction: action
      });
      this.toastr.success('', this.translateService.instant('CREATEPATH.PATHACTIONMSG27') + position + this.translateService.instant('CREATEPATH.PATHACTIONMSG28') + action.interactiveIdObject + this.translateService.instant('CREATEPATH.PATHACTIONMSG29') + action.InteractiveIdResponse + ')');
    }
    else if (type === 'ZaapAction') {
      this.path.pathAction.find(o => o.mapPos === position).actions.push({
        order: order,
        zaapAction: action
      });
      this.toastr.success('', this.translateService.instant('CREATEPATH.PATHACTIONMSG30') + position + this.translateService.instant('CREATEPATH.PATHACTIONMSG31') + action.destination + ')');
    }
    else if (type === 'ZaapiAction') {
      this.path.pathAction.find(o => o.mapPos === position).actions.push({
        order: order,
        zaapiAction: action
      });
      console.log('addzaapi');
      this.toastr.success('', this.translateService.instant('CREATEPATH.PATHACTIONMSG32') + position + this.translateService.instant('CREATEPATH.PATHACTIONMSG31') + action.destination + ')');
    }


    this.path.pathAction.find(o => o.mapPos === position).actions.sort(o => o.order);
  }


  addMoveAction(position, cell: number = null,overstate:boolean = false,mapId:number = null) {
    var ordre = this.getOrdre(position);
    if (mapId == null && ListBank.Banks.map(o => o.posBank).includes(position)) {
      mapId = ListBank.Banks.find(o => o.posBank == position).extMapId;
    }
    if (this.statePath === 2 && !overstate) {
      if (cell === null )
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
      if (mapId != null)
        this.moveActionToAdd.mapId = mapId;
    }
    else if (this.statePath === 3 || overstate) {
      if (cell == null)
        this.moveActionToAdd = {
          direction: this.direction,
          toGoBank: false,
          toBackBank: true
        }
      else
        this.moveActionToAdd = {
          cellId: cell,
          toGoBank: false,
          toBackBank: true
        }
      if (mapId != null)
        this.moveActionToAdd.mapId = mapId;
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
          toGoBank: false,
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
  addBankAction(position) {
    var ordre = this.getOrdre(position)
    this.bankActionToAdd = {
      mapId: ListBank.Banks.find(o => o.posBank == position). intMapId
    };
    this.addActionMapOnMap(position, ordre, this.bankActionToAdd, 'BankAction');

  }


}
