
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
}
