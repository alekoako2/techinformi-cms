import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Store} from '@ngxs/store';
import {DeleteNews} from '../../state/news.actions';

@Component({
  selector: 'app-news-delete-dialog',
  templateUrl: './news-delete-dialog.component.html',
  styleUrls: ['./news-delete-dialog.component.scss']
})
export class NewsDeleteDialogComponent implements OnInit {
  id: string;

  constructor(public dialogRef: MatDialogRef<NewsDeleteDialogComponent>, private store: Store, @Inject(MAT_DIALOG_DATA) id: string) {
    this.id = id;
  }

  ngOnInit() {
  }

  deleteNews() {
    this.store.dispatch(new DeleteNews({id: this.id}));
    this.dialogRef.close();
  }
}
