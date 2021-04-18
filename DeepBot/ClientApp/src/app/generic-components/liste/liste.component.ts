import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import icDelete from '@iconify/icons-ic/round-delete-forever';



export interface consommable {
  id: number,
  name: string,
  quantity: number,
  toUse: boolean,
}
export interface itemDofus {
  id: number,
  name: string,
  quantity: number,
  type: string
}
export interface ressources {
  id: number,
  name: string,
  quantity: number,
}

@Component({
    selector: 'app-liste',
    templateUrl: './liste.component.html',
    styleUrls: ['./liste.component.scss']
})
/** liste component*/
export class ListeComponent implements OnInit {
  @Input() isConsommable: boolean;
  @Input() isDestroyable: boolean;
  @Input() consommablesDofus: consommable[];
  @Input() itemDofus: itemDofus[];
  @Input() ressourcesDofus: ressources[];
  @Input() banqueDofus: ressources[];
  icDelete = icDelete;

  displayedColumns: string[];
  dataSource: MatTableDataSource<consommable | itemDofus | ressources>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {



  }

  ngOnInit() {
    if (this.consommablesDofus != null)
      this.displayedColumns = ['id', 'name', 'quantity','delete', 'select'];
    else if (this.ressourcesDofus != null)
      this.displayedColumns = ['id', 'name', 'quantity', 'delete','autoDelete'];
    else if (this.banqueDofus != null)
      this.displayedColumns = ['id', 'name', 'quantity'];
    else if (this.itemDofus != null)
      this.displayedColumns = ['id', 'name', 'quantity','type'];
    var data;
    if (this.consommablesDofus != null)
      data = this.consommablesDofus;
    else if (this.itemDofus != null)
      data = this.itemDofus
    else if (this.ressourcesDofus != null)
      data = this.ressourcesDofus;
    else if (this.banqueDofus != null)
      data = this.banqueDofus;

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(data);

    this.dataSource.paginator = this.paginator;
    this.dataSource.paginator.pageSize = 50;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  selection = new SelectionModel<consommable | itemDofus | ressources>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: consommable | itemDofus | ressources): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
}

