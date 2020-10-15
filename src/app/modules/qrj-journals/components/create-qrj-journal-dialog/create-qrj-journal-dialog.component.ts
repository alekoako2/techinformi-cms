import { Component } from '@angular/core'

import { MatDialogRef } from '@angular/material/dialog'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngxs/store'
import { AddQrjJournal } from '../../store/actions/qrj-journals-crud.actions'
import {
  LanguageCode,
  QrjJournalCreateInput,
  QrjJournalTranslationInput,
} from '@graphql'
import { first } from 'rxjs/operators'
import { MatSnackBar } from '@angular/material/snack-bar'
import { FormModel } from '@shared/modules/crud/types/crud-form-model.types'

@Component({
  selector: 'create-qrj-journal-dialog',
  templateUrl: './create-qrj-journal-dialog.component.html',
  styleUrls: ['./create-qrj-journal-dialog.component.scss'],
})
export class CreateQrjJournalDialogComponent {
  qrjJournalCreateForm: FormGroup

  constructor(
    private store: Store,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateQrjJournalDialogComponent>,
    private snackBar: MatSnackBar
  ) {
    this.buildForm()
  }

  buildForm = (): void => {
    const translationFormKA: FormModel<QrjJournalTranslationInput> = {
      address: [null],
      name: [null],
      language: [LanguageCode.KA],
    }
    const translationFormEN: FormModel<QrjJournalTranslationInput> = {
      address: [null],
      name: [null],
      language: [LanguageCode.EN],
    }

    const translationFormGroupKA = this.fb.group(translationFormKA)
    const translationFormGroupEN = this.fb.group(translationFormEN)

    const form: FormModel<QrjJournalCreateInput> = {
      code: [null, Validators.required],
      translation: this.fb.array([
        translationFormGroupKA,
        translationFormGroupEN,
      ]),
    }

    this.qrjJournalCreateForm = this.fb.group(form)
  }

  create = (): void => {
    const qrjJournalCreateInput: QrjJournalCreateInput = this
      .qrjJournalCreateForm.value

    this.store
      .dispatch(new AddQrjJournal({ qrjJournalCreateInput }))
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
