import { SideNavState } from '../Enum/SideNavState';
import { Classe } from '../Enum/Classe';

export class SideNav {
  items: SideNavItem[];
}


export class SideNavItem {
  id: string;
  isGroup: boolean;
  name: string;
  state: SideNavState;
  children: SideNavItem[];
}
