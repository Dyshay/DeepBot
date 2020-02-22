import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Icon } from '@visurel/iconify-angular';
import faCaretUp from '@iconify/icons-fa-solid/caret-up';
import faCaretDown from '@iconify/icons-fa-solid/caret-down';
import icHelp from '@iconify/icons-ic/help-outline';
import icShare from '@iconify/icons-ic/twotone-share';
import { MatBottomSheet } from '@angular/material';
import { ShareBottomSheetComponent } from '../../share-bottom-sheet/share-bottom-sheet.component';
import { scaleInOutAnimation } from '../../../animations/scale-in-out.animation';
import { ColorDef } from '../../../utils/tailwindcss.interface';
import { Link } from '../../../interfaces/link.interface';


@Component({
  selector: 'vex-widget-character',
  templateUrl: './widget-character.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [scaleInOutAnimation]
})
export class WidgetCharacterComponent implements OnInit {
  
  @Input() icon: Icon;
  @Input() value: string;
  @Input() label: string;
  @Input() change: number;
  @Input() helpText: string;
  @Input() color: ColorDef;

  faCaretUp = faCaretUp;
  faCaretDown = faCaretDown;
  icHelp = icHelp;
  icShare = icShare;

  showButton: boolean;

  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit() {
  }

  openSheet() {
    this._bottomSheet.open(ShareBottomSheetComponent);
  }
}
