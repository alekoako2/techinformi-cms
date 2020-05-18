import { Component } from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss'],
})
export class CustomDialogComponent {
  constructor(public dialogRef: MatDialogRef<CustomDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close()
  }
}
