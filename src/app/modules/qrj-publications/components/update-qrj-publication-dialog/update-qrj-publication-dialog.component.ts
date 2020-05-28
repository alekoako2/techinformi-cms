import { Component, Inject, OnInit } from '@angular/core'

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import {
  LanguageCode,
  QrjPublicationQuery,
  QrjPublicationTranslationInput,
  QrjPublicationUpdateInput,
  Scalars,
} from '@graphql'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { InputFilterAutocompleteListItem } from '@shared/components/custom-inputs/input-display-value-filter-autocomplete/input-display-value-filter-autocomplete.component'
import { first } from 'rxjs/operators'
import { QrjPublicationService } from '@http/qrj-publication-service'
import { Store } from '@ngxs/store'
import { UpdateQrjPublication } from '../../store/action'
import { FormModel } from '../qrj-publication-form/qrj-publication-form.component'
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'update-qrj-publication-dialog',
  templateUrl: './update-qrj-publication-dialog.component.html',
  styleUrls: ['./update-qrj-publication-dialog.component.scss'],
})
export class UpdateQrjPublicationDialogComponent implements OnInit {
  qrjPublicationUpdateForm: FormGroup

  qrjPublicationId: Scalars['ID']

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private qrjPublicationsService: QrjPublicationService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<UpdateQrjPublicationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data?
  ) {
    this.qrjPublicationId = data.id
  }

  ngOnInit(): void {
    this.setQrjPublicationForm()
  }

  setQrjPublicationForm = async (): Promise<void> => {
    const { qrjPublication } = await this.loadQrjPublication()

    const {
      index,
      oecd,
      qrjJournal,
      year,
      number,
      pages,
      doiUrl,
    } = qrjPublication

    const { translation } = qrjPublication

    const oecdCode = oecd ? oecd.code : null
    const qrjJournalCode = qrjJournal ? qrjJournal.code : null

    const translationFormKA: FormModel<QrjPublicationTranslationInput> = {
      title: [translation[0].title],
      publicationAuthor: [translation[0].publicationAuthor],
      publicationLang: [translation[0].publicationLang],
      abstract: [translation[0].abstract],
      language: [LanguageCode.KA],
    }
    const translationFormEN: FormModel<QrjPublicationTranslationInput> = {
      title: [translation[1].title],
      publicationAuthor: [translation[1].publicationAuthor],
      publicationLang: [translation[1].publicationLang],
      abstract: [translation[1].abstract],
      language: [LanguageCode.EN],
    }

    const translationFormGroupKA = this.fb.group(translationFormKA)
    const translationFormGroupEN = this.fb.group(translationFormEN)

    const form: FormModel<QrjPublicationUpdateInput> = {
      id: [this.qrjPublicationId],
      index: [index, Validators.required],
      oecd: [oecdCode],
      qrjJournal: [qrjJournalCode],
      year: [year],
      number: [number],
      pages: [pages],
      doiUrl: [doiUrl],
      translation: this.fb.array([
        translationFormGroupKA,
        translationFormGroupEN,
      ]),
    }

    this.qrjPublicationUpdateForm = this.fb.group(form)
  }

  loadQrjPublication = (): Promise<QrjPublicationQuery> => {
    return this.qrjPublicationsService
      .fetchSingle(this.qrjPublicationId)
      .pipe(first())
      .toPromise()
  }

  update = (): void => {
    const qrjPublicationUpdateInput: QrjPublicationUpdateInput = this
      .qrjPublicationUpdateForm.value

    this.store
      .dispatch(new UpdateQrjPublication({ qrjPublicationUpdateInput }))
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
