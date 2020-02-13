import { Injectable } from '@angular/core';
import { NavigationDropdown, NavigationItem, NavigationLink, NavigationSubheading } from '../interfaces/navigation-item.interface';
import { Subject } from 'rxjs';
import icLayers from '@iconify/icons-ic/twotone-layers';
import { LayoutService } from './layout.service';
import icSettings from '@iconify/icons-ic/twotone-settings';
import { User } from '../../webModel/User';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SideNav } from '../../webModel/Utility/SideNav';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  items: NavigationItem[] = [];
  item: NavigationLink;
  group: NavigationDropdown = null;
  itemGroup: NavigationLink = null;

  private _openChangeSubject = new Subject<NavigationDropdown>();
  openChange$ = this._openChangeSubject.asObservable();

  constructor(private http: HttpClient,private layoutService: LayoutService) { }

  addDropdown(item: NavigationDropdown) {
    this.items.push(item);
  }
  addLink(item: NavigationLink) {
    this.items.push(item);
  }
  addSubheading(item: NavigationSubheading) {
    this.items.push(item);
  }

  GenerateNavigation() {
    this.http.get<SideNav>(`${environment.apiURL}User/CreateSideNavUser`, httpOptions).subscribe(
      (result: SideNav) => {
        console.log(result);
        this.items = [];
        this.items.push({
          type: 'link',
          label: 'Tableau de bord',
          route: '/dashboards',
          icon: icLayers
        });
        this.items.push({
          type: 'subheading',
          label: 'Mes bot',
          children: []
        })
        for (var i = 0; i < result.items.length; i++) {
          this.group = {children:null,label:null,type:null,badge:null,icon:null};
          this.group.children = [];

          if (result.items[i].isGroup) {
            this.group.label = result.items[i].name;
            for (var j = 0; j < this.group.children.length; j++) {
              this.itemGroup = {label:null,route:null,type:null,badge:null,fragment:null}
              this.itemGroup.label = this.group.children[j].label;
              this.group.children.push(this.itemGroup);
              this.items.push(this.group);
            }
          }
          else {
            this.item = { label: null, route: null, type: null, badge: null, fragment: null };
            this.item.label = result.items[i].name;
            this.item.type = 'link';
            this.item.icon = icLayers
            this.item.route = () => '/bot' + result.items[i].id
            this.items.push(this.item);
          }
        }

        this.items.push({
          type: 'subheading',
          label: 'Customiser',
          children: [{
            type: 'link',
            label: 'Configuration',
            route: () => this.layoutService.openConfigpanel(),
            icon: icSettings
          }]
        });
        console.log(this.items);
      }
    );

    //this.items = [
    //  {
    //    type: 'link',
    //    label: 'Tableau de bord',
    //    route: '/dashboards',
    //    icon: icLayers
    //  },
    //  {
    //    type: 'subheading',
    //    label: 'Customiser',
    //    children: [{
    //      type: 'link',
    //      label: 'Configuration',
    //      route: () => this.layoutService.openConfigpanel(),
    //      icon: icSettings
    //    }]
    //  }];
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
