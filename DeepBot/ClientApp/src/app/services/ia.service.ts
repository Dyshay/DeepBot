
import { Injectable } from '@angular/core';
import { IA, SpellAction } from '../../webModel/IA';

@Injectable({
  providedIn: 'root',
})
export class IaService {
  ia: IA = new IA;

  
  spellToAdd: SpellAction = new SpellAction;
    constructor() {
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
