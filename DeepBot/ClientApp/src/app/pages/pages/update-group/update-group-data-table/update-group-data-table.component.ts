import { Component, Input, Output, EventEmitter, ViewChild, OnInit, AfterViewInit, SimpleChanges, OnChanges } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { stagger20ms } from '../../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { scaleFadeIn400ms } from '../../../../../@vex/animations/scale-fade-in.animation';
import { GroupInterface } from '../../../../../webModel/Interface/group.interface';
import { TableColumn } from '../../../../../@vex/interfaces/table-column.interface';
import icStar from '@iconify/icons-ic/twotone-star';
import icStarBorder from'@iconify/icons-ic/star-border'

@Component({
    selector: 'app-update-group-data-table',
    templateUrl: './update-group-data-table.component.html',
  styleUrls: ['./update-group-data-table.component.scss'],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'standard'
      } as MatFormFieldDefaultOptions
    }
  ],
  animations: [
    stagger20ms,
    fadeInUp400ms,
    scaleFadeIn400ms
  ]
})
/** update-group-data-table component*/
export class UpdateGroupDataTableComponent<T> implements OnInit, OnChanges, AfterViewInit {
  @Input() data: T[];
  @Input() columns: TableColumn<T>[];
  @Input() pageSize = 20;
  @Input() pageSizeOptions = [10, 20, 50];
  @Input() searchStr: string;

  @Output() openGroup = new EventEmitter<GroupInterface['name']>();

  visibleColumns: Array<keyof T | string>;
  icStar = icStar;
  icStarBorder = icStarBorder;
  dataSource = new MatTableDataSource<T>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;



  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.columns) {
      this.visibleColumns = this.columns.map(column => column.property);
    }
    if (changes.data) {
      this.dataSource.data = this.data;
    }
    if (changes.searchStr) {
      this.dataSource.filter = (this.searchStr || '').trim().toLowerCase();
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
