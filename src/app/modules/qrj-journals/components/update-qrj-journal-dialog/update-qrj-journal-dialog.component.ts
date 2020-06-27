import { Component, Inject, OnInit } from '@angular/core'

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import {
  LanguageCode,
  QrjJournalQuery,
  QrjJournalTranslationInput,
  QrjJournalUpdateInput,
  Scalars,
} from '@graphql'
import { FormBuilder, FormGroup } from '@angular/forms'
import { first } from 'rxjs/operators'
import { QrjJournalService } from '@http/qrj-journal-service'
import { Store } from '@ngxs/store'
import { UpdateQrjJournal } from '../../store/actions/qrj-journals-crud.actions'
import { MatSnackBar } from '@angular/material/snack-bar'
import { FormModel } from '@shared/modules/crud/types/crud-form-model.types'

@Component({
  selector: 'update-qrj-journal-dialog',
  templateUrl: './update-qrj-journal-dialog.component.html',
  styleUrls: ['./update-qrj-journal-dialog.component.scss'],
})
export class UpdateQrjJournalDialogComponent implements OnInit {
  qrjJournalUpdateForm: FormGroup

  qrjJournalId: Scalars['ID']

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private qrjJournalsService: QrjJournalService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<UpdateQrjJournalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data?
  ) {
    this.qrjJournalId = data.id
  }

  ngOnInit(): void {
    this.setQrjJournalForm()
  }

  setQrjJournalForm = async (): Promise<void> => {
    const { qrjJournal } = await this.loadQrjJournal()

    const { code } = qrjJournal

    const { translation } = qrjJournal

    const translationFormKA: FormModel<QrjJournalTranslationInput> = {
      id: [translation[0].id],
      address: [translation[0].address],
      name: [translation[0].name],
      language: [LanguageCode.KA],
    }
    const translationFormEN: FormModel<QrjJournalTranslationInput> = {
      id: [translation[1].id],
      address: [translation[1].address],
      name: [translation[1].name],
      language: [LanguageCode.EN],
    }

    const translationFormGroupKA = this.fb.group(translationFormKA)
    const translationFormGroupEN = this.fb.group(translationFormEN)

    const form: FormModel<QrjJournalUpdateInput> = {
      id: [this.qrjJournalId],
      code: [code],
      translation: this.fb.array([
        translationFormGroupKA,
        translationFormGroupEN,
      ]),
    }

    this.qrjJournalUpdateForm = this.fb.group(form)
  }

  loadQrjJournal = (): Promise<QrjJournalQuery> => {
    return this.qrjJournalsService
      .fetchSingle(this.qrjJournalId)
      .pipe(first())
      .toPromise()
  }

  update = (): void => {
    const qrjJournalUpdateInput: QrjJournalUpdateInput = this
      .qrjJournalUpdateForm.value

    this.store
      .dispatch(new UpdateQrjJournal({ qrjJournalUpdateInput }))
      .pipe(first())
      .subscribe(
        () => {
          this.dialogRef.close()
        },
        (err: Error) => {
          this.snackBar.open(err.message, null, { duration: 3000 })
        }
      )
  }
}
