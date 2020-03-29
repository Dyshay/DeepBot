
import { Injectable } from '@angular/core';
import { IA, SpellAction, ConditionalType, OperatorType, Target, Classe, TypeIA } from '../../webModel/IA';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root',
})
export class IaService {
  ia: IA = new IA;

  private emitChangeIaUpdate = new Subject<any>();
  changeIaUpdateEmitted$ = this.emitChangeIaUpdate.asObservable();

  emitChange(iaUpdate: any) {
    this.ia = iaUpdate;
    this.emitChangeIaUpdate.next(iaUpdate);
  }

 

  createIa(createdIa: any): Observable<any> {
    createdIa.classe = parseInt(Classe[createdIa.classe]);
    createdIa.type = parseInt(TypeIA[createdIa.type]);
    for (var i = 0; i < createdIa.actions.length; i++) {
      createdIa.actions[i].target = parseInt(Target[createdIa.actions[i].target]);
      for (var j = 0; j < createdIa.actions[i].conditions.length; j++) {
        createdIa.actions[i].conditions[j].conditionalType = parseInt(ConditionalType[createdIa.actions[i].conditions[j].conditionalType]);
        createdIa.actions[i].conditions[j].operator = parseInt(OperatorType[createdIa.actions[i].conditions[j].operator]);
      }
    }
    return this.http.post<any>(`${environment.apiURL}IA/CreateIA`, createdIa, httpOptions)
  }
  updateIa(updatedIa: any): Observable<any> {
    updatedIa.classe = parseInt(Classe[updatedIa.classe]);
    updatedIa.type = parseInt(TypeIA[updatedIa.type]);
    for (var i = 0; i < updatedIa.actions.length; i++) {
      updatedIa.actions[i].target = parseInt(Target[updatedIa.actions[i].target]);
      for (var j = 0; j < updatedIa.actions[i].conditions.length; j++) {
        updatedIa.actions[i].conditions[j].conditionalType = parseInt(ConditionalType[updatedIa.actions[i].conditions[j].conditionalType]);
        updatedIa.actions[i].conditions[j].operator = parseInt(OperatorType[updatedIa.actions[i].conditions[j].operator]);
      }
    }
    return this.http.post<any>(`${environment.apiURL}IA/UpdateIa`, updatedIa, httpOptions)
  }
  getAllIa(): Observable<IA[]> {
    return this.http.get<IA[]>(`${environment.apiURL}IA/GetAllIAs`, httpOptions);
  }

  deleteIa(key: string) {
    return this.http.post<string>(`${environment.apiURL}IA/DeleteIa`, { key }, httpOptions);
  }

  
  spellToAdd: SpellAction = new SpellAction;
  constructor(private http: HttpClient) {
      this.ia.actions = [];
  }

  addSpellToIa() {
    this.ia.actions.push(this.spellToAdd);
    this.spellToAdd = new SpellAction;
    console.log(this.ia)
  }

  deleteSpell(action: SpellAction) {
    var index = this.ia.actions.findIndex(o => o.priority == action.priority);
    this.ia.actions.splice(index, 1);
    for (var i = 0; i < this.ia.actions.length; i++) {
      this.ia.actions[i].priority = i + 1;
    }
  }


}
