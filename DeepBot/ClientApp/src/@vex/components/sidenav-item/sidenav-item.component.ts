import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { NavigationDropdown, NavigationItem, NavigationLink } from '../../interfaces/navigation-item.interface';
import { dropdownAnimation } from '../../animations/dropdown.animation';
import { NavigationEnd, Router } from '@angular/router';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { filter } from 'rxjs/operators';
import { NavigationService } from '../../services/navigation.service';
import icKeyboardArrowRight from '@iconify/icons-ic/twotone-keyboard-arrow-right';
import { CharacterActions } from '../../../app/app-reducers/character/actions';
import { webUserActions } from '../../../app/app-reducers/webUser/actions';
import * as fromCharacter from '../../../app/app-reducers/character/reducers';
import * as fromWeb from '../../../app/app-reducers/webUser/reducers';
import { Store } from '@ngrx/store';
import { TalkService } from 'src/app/Services/TalkService';

@Component({
  selector: 'vex-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss'],
  animations: [dropdownAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavItemComponent implements OnInit, OnChanges, OnDestroy {

  @Input() item: NavigationItem;
  @Input() level: number;
  isOpen: boolean;
  isActive: boolean;
  icKeyboardArrowRight = icKeyboardArrowRight;

  isLink = this.navigationService.isLink;
  isDropdown = this.navigationService.isDropdown;
  isSubheading = this.navigationService.isSubheading;

  constructor(private router: Router,
              private cd: ChangeDetectorRef,
              private navigationService: NavigationService, private characterStore: Store<fromCharacter.State>, private webStore: Store<fromWeb.State>, private hub: TalkService) { }

  @HostBinding('class')
  get levelClass() {
    return `item-level-${this.level}`;
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      filter(() => this.isDropdown(this.item)),
      untilDestroyed(this)
    ).subscribe(() => this.onRouteChange());

    this.navigationService.openChange$.pipe(
      filter(() => this.isDropdown(this.item)),
      untilDestroyed(this)
    ).subscribe(item => this.onOpenChange(item));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.hasOwnProperty('item') && this.isDropdown(this.item)) {
      this.onRouteChange();
    }
  }

  switchBot(item){
    var regex = /([0-9]){3,}/;
    let id = regex.exec(item)[0];
    this.hub.FetchTcpId(Number.parseInt(id));
    this.characterStore.dispatch(CharacterActions.updateCharacter({character: undefined, key: Number.parseInt(id)}))
    this.characterStore.dispatch(CharacterActions.ResetCharacteristics());
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
    this.navigationService.triggerOpenChange(this.item as NavigationDropdown);
    this.cd.markForCheck();
  }

  onOpenChange(item: NavigationDropdown) {
    if (this.isChildrenOf(this.item as NavigationDropdown, item)) {
      return;
    }

    if (this.hasActiveChilds(this.item as NavigationDropdown)) {
      return;
    }

    if (this.item !== item) {
      this.isOpen = false;
      this.cd.markForCheck();
    }
  }

  onRouteChange() {
    if (this.hasActiveChilds(this.item as NavigationDropdown)) {
      this.isActive = true;
      this.isOpen = true;
      this.navigationService.triggerOpenChange(this.item as NavigationDropdown);
      this.cd.markForCheck();
    } else {
      this.isActive = false;
      this.isOpen = false;
      this.navigationService.triggerOpenChange(this.item as NavigationDropdown);
      this.cd.markForCheck();
    }
  }

  isChildrenOf(parent: NavigationDropdown, item: NavigationDropdown) {
    if (parent.children.indexOf(item) !== -1) {
      return true;
    }

    return parent.children
      .filter(child => this.isDropdown(child))
      .some(child => this.isChildrenOf(child as NavigationDropdown, item));
  }

  hasActiveChilds(parent: NavigationDropdown) {
    return parent.children.some(child => {
      if (this.isDropdown(child)) {
        return this.hasActiveChilds(child);
      }

      if (this.isLink(child) && !this.isFunction(child.route)) {
        return this.router.isActive(child.route as string, false);
      }
    });
  }

  isFunction(prop: NavigationLink['route']) {
    return prop instanceof Function;
  }

  dropdownLink(route: string) {
    console.log(route);
    this.router.navigateByUrl(route)
  }

  ngOnDestroy(): void {}
}
