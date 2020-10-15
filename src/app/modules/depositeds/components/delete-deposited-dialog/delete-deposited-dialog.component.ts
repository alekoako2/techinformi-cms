import { Component, Inject, OnInit } from '@angular/core'
import { Store } from '@ngxs/store'
import { DeleteDeposited } from '../../store/actions'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-delete-deposited-dialog',
  templateUrl: './delete-deposited-dialog.component.html',
  styleUrls: ['./delete-deposited-dialog.component.scss'],
})
export class DeleteDepositedDialogComponent {
  id: string

  constructor(
    public dialogRef: MatDialogRef<DeleteDepositedDialogComponent>,
    private store: Store,
    @Inject(MAT_DIALOG_DATA) id: string
  ) {
    this.id = id
  }

  deleteDeposited = (): void => {
    this.store.dispatch(new DeleteDeposited({ id: this.id }))
    this.dialogRef.close()
  }
}
