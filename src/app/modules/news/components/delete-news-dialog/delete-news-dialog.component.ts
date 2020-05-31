import { Component, Inject, OnInit } from '@angular/core'
import { Store } from '@ngxs/store'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { DeleteNews } from '../../store/actions'

@Component({
  selector: 'delete-news-dialog',
  templateUrl: './delete-news-dialog.component.html',
  styleUrls: ['./delete-news-dialog.component.scss'],
})
export class DeleteNewsDialogComponent {
  id: string

  constructor(
    public dialogRef: MatDialogRef<DeleteNewsDialogComponent>,
    private store: Store,
    @Inject(MAT_DIALOG_DATA) id: string
  ) {
    this.id = id
  }

  deleteNews = (): void => {
    this.store.dispatch(new DeleteNews({ id: this.id }))
    this.dialogRef.close()
  }
}
