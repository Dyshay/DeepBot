import { Component, Input, OnInit, OnChanges, AfterViewInit, EventEmitter, Output, ViewChild, SimpleChanges } from '@angular/core';
import { MatFormFieldDefaultOptions, MAT_FORM_FIELD_DEFAULT_OPTIONS, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { stagger20ms } from '../../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { scaleFadeIn400ms } from '../../../../../@vex/animations/scale-fade-in.animation';
import { TableColumn } from '../../../../../@vex/interfaces/table-column.interface';
import { IaInterface } from '../../../../../webModel/Interface/ia.interface';
import icStar from '@iconify/icons-ic/twotone-star';
import icStarBorder from '@iconify/icons-ic/star-border'

@Component({
    selector: 'app-update-ia-data-table',
    templateUrl: './update-ia-data-table.component.html',
  styleUrls: ['./update-ia-data-table.component.scss'],
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
/** update-ia-data-table component*/
export class UpdateIaDataTableComponent<T> implements OnInit, OnChanges, AfterViewInit {
  @Input() data: T[];
  @Input() columns: TableColumn<T>[];
  @Input() pageSize = 20;
  @Input() pageSizeOptions = [10, 20, 50];
  @Input() searchStr: string;

  @Output() openIa = new EventEmitter<IaInterface['name']>();

  visibleColumns: Array<keyof T | string>;
  icStar = icStar;
  icStarBorder = icStarBorder;
  dataSource = new MatTableDataSource<T>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

    /** update-ia-data-table ctor */
    constructor() {

  }

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
