import { Injectable } from '@angular/core';
import { NavigationDropdown, NavigationItem, NavigationLink, NavigationSubheading } from '../interfaces/navigation-item.interface';
import { Subject } from 'rxjs';
import icLayers from '@iconify/icons-ic/twotone-layers';
import { LayoutService } from './layout.service';
import icSettings from '@iconify/icons-ic/twotone-settings';
import { User } from '../../webModel/User';
@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  items: NavigationItem[] = [];

  private _openChangeSubject = new Subject<NavigationDropdown>();
  openChange$ = this._openChangeSubject.asObservable();

  constructor(private layoutService: LayoutService) { }

  addDropdown(item: NavigationDropdown) {
    this.items.push(item);
  }
  addLink(item: NavigationLink) {
    this.items.push(item);
  }
  addSubheading(item: NavigationSubheading) {
    this.items.push(item);
  }

  RegenerateNavigation(user:User) {
    this.items = [
      {
        type: 'link',
        label: 'Tableau de bord',
        route: '/dashboards',
        icon: icLayers
      },
      {
        type: 'subheading',
        label: 'Customiser',
        children: [{
          type: 'link',
          label: 'Configuration',
          route: () => this.layoutService.openConfigpanel(),
          icon: icSettings
        }]
      }];

    for (var i = 0; i < user.accounts.length; i++) {

    }


  }

  

  triggerOpenChange(item: NavigationDropdown) {
    this._openChangeSubject.next(item);
  }

  isLink(item: NavigationItem): item is NavigationLink {
    return item.type === 'link';
  }

  isDropdown(item: NavigationItem): item is NavigationDropdown {
    return item.type === 'dropdown';
  }

  isSubheading(item: NavigationItem): item is NavigationSubheading {
    return item.type === 'subheading';
  }
}
