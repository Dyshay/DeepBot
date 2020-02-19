import { Component, OnInit, OnDestroy } from '@angular/core';
import icDoneAll from '@iconify/icons-ic/twotone-done-all';
import { stagger80ms } from '../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { scaleIn400ms } from '../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Character } from '../../../../webModel/Character';
import { Classe } from '../../../../webModel/Enum/Classe';
import { Store } from '@ngrx/store';
import * as fromgroup from 'src/app/app-reducers/group/reducers'
import { GroupActions } from 'src/app/app-reducers/group/actions';
import * as fromcharacter from 'src/app/app-reducers/character/reducers'
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Group } from '../../../../webModel/Group';

@Component({
    selector: 'app-create-group',
    templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss'],
  animations: [
    stagger80ms,
    fadeInUp400ms,
    scaleIn400ms,
    fadeInRight400ms
  ]
})
/** create-group component*/
export class CreateGroupComponent implements OnInit, OnDestroy {

  /* table */ 
  displayedColumns: string[] = ['select', 'serveur', 'pseudo', 'classe', 'level'];
  dataSource = new MatTableDataSource<Character>();
  selection = new SelectionModel<Character>(true, []);


  groupstep1: FormGroup;
  groupstep2: FormGroup;
  groupstep3: FormGroup;
  icDoneAll = icDoneAll;
  Leader: Character = null;
  characterList: Character[] = [];
  groupToCreate: Group = new Group();
  followers: Character[] = [];
    /** create-group ctor */
  constructor(private fb: FormBuilder, private storeGroup: Store<fromgroup.State>,
    private storeCharacter: Store<fromcharacter.State>) {

  }
  ngOnInit() {
    this.InitiateList();
    this.groupstep1 = this.fb.group({
      groupName: [null, Validators.required],
      startHour: [null, Validators.max(23)],
      endHour: [null, Validators.max(23)],
      trajet: [],
      description : []
    });
    this.groupstep2 = this.fb.group({
      leader: [Character, Validators.required],
    });

    this.groupstep3 = this.fb.group({
      membres: [[Character], Validators.maxLength(7)],
    });
  }
  ngOnDestroy(): void {
  }

  InitiateList() {
    this.storeCharacter.select(fromcharacter.getAllCurrentCharacters)
      .subscribe(result => {
        Object.assign(this.characterList, result);
        this.dataSource = new MatTableDataSource<Character>(result);

      });


  }
  updateList(character: Character) {
    this.Leader = character;

  }

  submit() {
    this.groupToCreate.name = this.groupstep1.controls["groupName"].value;
    this.groupToCreate.description = this.groupstep1.controls["description"].value;
    this.groupToCreate.fk_Leader = this.Leader.key;
    this.groupToCreate.fk_Followers = [];
    for (var i = 0; i < this.followers.length; i++) {
      this.groupToCreate.fk_Followers.push(this.followers[i].key);
    }
    let createdGroup = this.groupToCreate;
    this.storeGroup.dispatch(GroupActions.createGroup({ createdGroup }));
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
      this.followers.splice(index,1);
    }
   
  }


}
