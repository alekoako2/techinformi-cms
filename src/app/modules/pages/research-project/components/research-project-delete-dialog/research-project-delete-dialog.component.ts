import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Store} from '@ngxs/store';
import {DeleteResearchProject} from '../../state/research-project.actions';

@Component({
  selector: 'app-research-project-delete-dialog',
  templateUrl: './research-project-delete-dialog.component.html',
  styleUrls: ['./research-project-delete-dialog.component.scss']
})
export class ResearchProjectDeleteDialogComponent implements OnInit {

  id: string;

  constructor(public dialogRef: MatDialogRef<ResearchProjectDeleteDialogComponent>, private store: Store, @Inject(MAT_DIALOG_DATA) id: string) {
    this.id = id;
  }

  ngOnInit() {
  }

  deleteResearchProject() {
    this.store.dispatch(new DeleteResearchProject({id: this.id}));
    this.dialogRef.close();
  }
}
