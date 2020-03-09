import { Component, EventEmitter, Output, Input, ViewChild, SimpleChanges, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { stagger20ms } from '../../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { scaleFadeIn400ms } from '../../../../../@vex/animations/scale-fade-in.animation';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { PathInterface } from '../../../../../webModel/Interface/path';
import { TableColumn } from '../../../../../@vex/interfaces/table-column.interface';
import icStar from '@iconify/icons-mdi/crosshairs-gps';
import icStarBorder from '@iconify/icons-mdi/crosshairs-off';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDeleteForever from '@iconify/icons-ic/twotone-delete-forever';

@Component({
    selector: 'app-update-path-data-table',
    templateUrl: './update-path-data-table.component.html',
  styleUrls: ['./update-path-data-table.component.scss'],
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
/** update-path-data-table component*/
export class UpdatePathDataTableComponent<T> implements OnInit, OnChanges, AfterViewInit  {
  @Input() data: T[];
  @Input() columns: TableColumn<T>[];
  @Input() pageSize = 20;
  @Input() pageSizeOptions = [10, 20, 50];
  @Input() searchStr: string;

  @Output() openPath = new EventEmitter<PathInterface['name']>();

  visibleColumns: Array<keyof T | string>;
  icMoreVert = icMoreVert;
  icStar = icStar;
  icStarBorder = icStarBorder;
  icDeleteForever = icDeleteForever;
  icEdit = icEdit;
  dataSource = new MatTableDataSource<T>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

    constructor() {}

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
