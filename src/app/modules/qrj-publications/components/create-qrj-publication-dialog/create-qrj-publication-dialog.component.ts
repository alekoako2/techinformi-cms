import { Component } from '@angular/core'

import { MatDialogRef } from '@angular/material/dialog'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngxs/store'
import { AddQrjPublication } from '../../store/action'
import {
  LanguageCode,
  QrjPublicationCreateInput,
  QrjPublicationTranslationInput,
} from '@graphql'
import { first } from 'rxjs/operators'
import { MatSnackBar } from '@angular/material/snack-bar'
import { FormModel } from '../qrj-publication-form/qrj-publication-form.component'

@Component({
  selector: 'create-qrj-publication-dialog',
  templateUrl: './create-qrj-publication-dialog.component.html',
  styleUrls: ['./create-qrj-publication-dialog.component.scss'],
})
export class CreateQrjPublicationDialogComponent {
  qrjPublicationCreateForm: FormGroup

  constructor(
    private store: Store,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateQrjPublicationDialogComponent>,
    private snackBar: MatSnackBar
  ) {
    this.buildForm()
  }

  buildForm = (): void => {
    const translationFormKA: FormModel<QrjPublicationTranslationInput> = {
      title: [null],
      publicationAuthor: [null],
      publicationLang: [null],
      abstract: [null],
      language: [LanguageCode.KA],
    }
    const translationFormEN: FormModel<QrjPublicationTranslationInput> = {
      title: [null],
      publicationAuthor: [null],
      publicationLang: [null],
      abstract: [null],
      language: [LanguageCode.EN],
    }

    const translationFormGroupKA = this.fb.group(translationFormKA)
    const translationFormGroupEN = this.fb.group(translationFormEN)

    const form: FormModel<QrjPublicationCreateInput> = {
      index: [null, Validators.required],
      oecd: [null],
      qrjJournal: [null],
      year: [null],
      number: [null],
      pages: [null],
      doiUrl: [null],
      translation: this.fb.array([
        translationFormGroupKA,
        translationFormGroupEN,
      ]),
    }

    this.qrjPublicationCreateForm = this.fb.group(form)
  }

  create = (): void => {
    const qrjPublicationCreateInput: QrjPublicationCreateInput = this
      .qrjPublicationCreateForm.value

    this.store
      .dispatch(new AddQrjPublication({ qrjPublicationCreateInput }))
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
