import { Component, Input, OnInit } from '@angular/core';
import { Group } from '../../../../../webModel/Group';
import theme from '../../../../../@vex/utils/tailwindcss';
import icKamas from '@iconify/icons-fa-solid/coins';
import icTimer from '@iconify/icons-ic/twotone-timer';
import icPOD from '@iconify/icons-mdi/weight';
import icExperience from '@iconify/icons-ic/baseline-timeline';
import icStarTrue from '@iconify/icons-ic/twotone-star';
import icStarFalse from '@iconify/icons-ic/twotone-star-border';
import { state, trigger, transition, style, animate } from '@angular/animations';
import { MatTableModule } from '@angular/material/table';
import { link } from 'fs';

@Component({
    selector: 'app-dashboard-group',
    templateUrl: './dashboard-group.component.html',
  styleUrls: ['./dashboard-group.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px'})),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
/** dashboard-group component*/
export class DashboardGroupComponent implements OnInit {
  @Input() group: Group;
  dataSource;
  columnsToDisplay = ['Nom', 'Classe', 'Level', 'POD', 'Leader'];
  expandedElement: PeriodicElement | null;
  data: Character[] = [];

  theme = theme;
  icKamas = icKamas;
  icTimer = icTimer;
  icExperience = icExperience;
  icPOD = icPOD;
  icStarTrue = icStarTrue;
  icStarFalse = icStarFalse;
    /** dashboard-group ctor */
    constructor() {

  }
  ngOnInit() {
    this.data.push(
      {
        Classe: this.group.leader.breedId,
        POD: '80%',
        Leader: true,
        Level: this.group.leader.level,
        Nom: this.group.leader.name,
        link: '/bot-dashboard/' + this.group.leader.key
      }
    );

    for (var i = 0; i < this.group.followers.length; i++) {
      this.data.push(
        {
          Classe: this.group.followers[i].breedId,
          POD: '80%',
          Leader: false,
          Level: this.group.followers[i].level,
          Nom: this.group.followers[i].name,
          link: '/bot-dashboard/' + this.group.followers[i].key
        }
      )
    }
    this.dataSource = this.data;
  }

  https://localhost:44319/bot-dashboard/70080623
}

export interface Character {
  Nom: string,
  Classe: number,
  Level: number,
  POD: string,
  Leader: boolean,
  link: string
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  }, {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`
  }, {
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`
  }, {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`
  }, {
    position: 5,
    name: 'Boron',
    weight: 10.811,
    symbol: 'B',
    description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`
  }, {
    position: 6,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`
  }, {
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`
  }, {
    position: 8,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`
  }
];
