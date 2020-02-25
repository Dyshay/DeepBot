import { Component, OnInit } from '@angular/core';
import icLayers from '@iconify/icons-ic/baseline-forum';
import icAssigment from '@iconify/icons-ic/twotone-assignment';
import { Icon } from '@visurel/iconify-angular';
import icContactSupport from '@iconify/icons-ic/twotone-contact-support';
import icContacts from '@iconify/icons-ic/twotone-contacts';
import icAssessment from '@iconify/icons-ic/twotone-assessment';
import icBook from '@iconify/icons-ic/twotone-book';
import { PopoverRef } from '../popover/popover-ref';
import { TranslateService } from '@ngx-translate/core';

export interface MegaMenuFeature {
  icon: Icon;
  label: string;
  route: string;
}


@Component({
  selector: 'vex-mega-menu',
  templateUrl: './mega-menu.component.html'
})
export class MegaMenuComponent implements OnInit {

  features: MegaMenuFeature[] = [
    {
      icon: icLayers,
      label: this.translateService.instant('MENU.FORUM'),
      route: '/'
    },
    {
      icon: icBook,
      label: this.translateService.instant('MENU.DOCUMENTATION'),
      route: '/documentation'
    },
    {
      icon: icContactSupport,
      label: this.translateService.instant('MENU.SUPPORT'),
      route: '/apps/help-center'
    }
  ];

 

  constructor(private popoverRef: PopoverRef<MegaMenuComponent>,private translateService:TranslateService) { }

  ngOnInit() {
  }

  close() {
    this.popoverRef.close();
  }
}
