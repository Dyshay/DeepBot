import { Component, ChangeDetectorRef, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as fromGroup from 'src/app/app-reducers/group/reducers';
import * as fromCharacter from 'src/app/app-reducers/character/reducers';
import { Store, select } from '@ngrx/store';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { GroupInterface } from '../../../../../webModel/Interface/group.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Group } from '../../../../../webModel/Group';
import { Character } from '../../../../../webModel/Character';
import { SelectionModel } from '@angular/cdk/collections';
import icClose from '@iconify/icons-ic/close'
import { GroupActions } from 'src/app/app-reducers/group/actions';
@Component({
    selector: 'app-modal-update-group',
    templateUrl: './modal-update-group.component.html',
    styleUrls: ['./modal-update-group.component.scss']
})
/** modal-update-group component*/
export class ModalUpdateGroupComponent implements OnInit {
  form;
  groups: Group[];
  group: Group;
  icClose = icClose;
  characterList: Character[]
  leaderList: Character[];
  followers: Character[] = [];
  /* table */
  displayedColumns: string[] = ['select', 'serveur', 'pseudo', 'classe', 'level'];
  dataSource = new MatTableDataSource<Character>();
  selection = new SelectionModel<Character>(true, []);

    /** modal-update-group ctor */
  constructor(private translateService: TranslateService,
    private storeGroup: Store<fromGroup.State>,
    private storeCharacter:Store<fromCharacter.State>,
    private dialogRef: MatDialogRef<ModalUpdateGroupComponent>,
    private toastr: ToastrService,
    private cd: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) private groupName: GroupInterface['name'], private fb: FormBuilder) {


  }

  ngOnInit() {
    this.storeCharacter.select(fromCharacter.getAllCurrentCharacters).subscribe(
      (result: Character[]) => {

        this.storeGroup.pipe(select(fromGroup.getAllGroups)).subscribe(
          (result1: Group[]) => {
            this.groups = result1;
            this.group = result1.find(o => o.name == this.groupName);
            console.log(this.group);
            this.characterList = [...result];
            this.leaderList = [...result];
            

            this.form = this.fb.group({
              groupName: this.group.name,
              description: this.group.description,
              leader: this.group.leader.key,
              trajet: this.group.trajet
            });

            var index = this.characterList.findIndex(o => o.key == this.group.fk_Leader);
            if (index != -1)
              this.characterList.splice(index, 1);
            for (var i = 0; i < this.group.fk_Followers.length; i++) {
              this.followers.push(this.characterList.find(o => o.key == this.group.fk_Followers[i]));
            }

            this.selection = new SelectionModel<Character>(true, this.characterList.filter(o=> this.followers.map(o=>o.key).includes(o.key)));
            this.dataSource = new MatTableDataSource<Character>(this.characterList);
          });
      });


  }

  changeLeader(characterkey) {
    if (characterkey != this.group.leader.key) {
      this.characterList.push(this.group.leader);
      this.group.leader = this.leaderList.find(o => o.key == characterkey);
      this.group.fk_Leader = characterkey;
     
      var index = this.characterList.findIndex(o => o.key == characterkey)
      this.characterList.splice(index, 1);
      var index2 = this.followers.findIndex(o => o.key == characterkey);
      if(index2 != -1)
         this.followers.splice(index, 1);
      this.dataSource = new MatTableDataSource<Character>(this.characterList);
      var index3 = this.selection.selected.findIndex(o => o.key == characterkey);
      this.selection.deselect(this.selection.selected[index3]);
      if (index3 != -1)
        this.selection.selected.splice(index3, 1);
    }
  }

  updateGroup() {
    this.group.name = this.form.controls["groupName"].value;
    this.group.description = this.form.controls["description"].value;
    this.group.fk_Leader = this.form.controls["leader"].value;
    this.group.trajet = this.form.controls["trajet"].value;
    this.group.followers = this.selection.selected;
    this.group.fk_Followers = this.group.followers.map(o => o.key);
    let groupToUpdate = this.group
    this.storeGroup.dispatch(GroupActions.updateGroup({ groupToUpdate }));
    this.dialogRef.close(this.group);
  }



  /* table */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  clickCheckbox(row?: Character) {
    if (!this.selection.isSelected(row)) {
      this.followers.push(row);
    }
    else {
      var index = this.followers.findIndex(o => o.key == row.key);
      this.followers.splice(index, 1);
    }

  }


}
