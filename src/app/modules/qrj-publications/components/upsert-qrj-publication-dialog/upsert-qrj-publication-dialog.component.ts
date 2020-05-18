import { Component, Inject, OnInit } from '@angular/core'

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { Select, Store } from '@ngxs/store'
import { QrjPublication } from '@graphql'
import { GetQrjPublication } from '../../states/qrj-publications-crud-state/qrj-publications-crud.actions'
import { Observable } from 'rxjs'

@Component({
  selector: 'upsert-qrj-publication-dialog',
  templateUrl: './upsert-qrj-publication-dialog.component.html',
  styleUrls: ['./upsert-qrj-publication-dialog.component.scss'],
})
export class UpsertQrjPublicationDialogComponent implements OnInit {
  qrjPublication: QrjPublication = {}
  showCreate = true

  loadQrjPublication = (id): void => {
    this.store.dispatch(new GetQrjPublication({ id }))
    this.store
      .select((state) => state.qrjPublications.qrjPublication)
      .subscribe(
        (qrjPublication: QrjPublication) =>
          (this.qrjPublication = { ...qrjPublication })
      )
  }
  constructor(
    private store: Store,
    // private oecdService: OecdService,
    // private qrjJournalService: QrjJournalService,
    public dialogRef: MatDialogRef<UpsertQrjPublicationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data?
  ) {
    if (data) this.loadQrjPublication(data.id)

    // this.publicationData = <QrjPublicationQuery_qrjPublication>{}
    // this.publicationData.journal = <
    //   QrjPublicationQuery_qrjPublication_journal
    // >{}
    // this.publicationData.oecd = <QrjPublicationQuery_qrjPublication_oecd>{}
    // this.publicationData.translation = <
    //   QrjPublicationQuery_qrjPublication_translation[]
    // >{}
    // this.publicationData.translation[0] = <
    //   QrjPublicationQuery_qrjPublication_translation
    // >{}
    // this.publicationData.translation[1] = <
    //   QrjPublicationQuery_qrjPublication_translation
    // >{}

    if (data) {
      this.showCreate = false
      // this.publicationData = data.qrjPublications.qrjPublication
    }
  }

  ngOnInit() {
    // this.oecdList = this.oecdService.loadOecds()
    // this.qrjJournalList = this.qrjJournalService.loadQrjJournals()
  }

  arrayThree(n: number, startFrom: number): number[] {
    return [...Array(n).keys()].map((i) => i + startFrom)
  }

  create() {
    // this.store.dispatch(new AddQrjPublication(this.publicationData))
    this.dialogRef.close()
  }

  update() {
    // this.store.dispatch(new UpdateQrjPublication(this.publicationData))
    this.dialogRef.close()
  }
}
