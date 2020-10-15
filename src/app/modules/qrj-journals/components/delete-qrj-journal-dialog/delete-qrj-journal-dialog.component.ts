import { Component, Inject } from '@angular/core'
import { Store } from '@ngxs/store'
import { DeleteQrjJournal } from '../../store/actions/qrj-journals-crud.actions'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-delete-qrj-journal-dialog',
  templateUrl: './delete-qrj-journal-dialog.component.html',
  styleUrls: ['./delete-qrj-journal-dialog.component.scss'],
})
export class DeleteQrjJournalDialogComponent {
  id: string

  constructor(
    public dialogRef: MatDialogRef<DeleteQrjJournalDialogComponent>,
    private store: Store,
    @Inject(MAT_DIALOG_DATA) id: string
  ) {
    this.id = id
  }

  deleteQrjJournal = (): void => {
    this.store.dispatch(new DeleteQrjJournal({ id: this.id }))
    this.dialogRef.close()
  }
}
