import { Component, Inject, OnInit } from '@angular/core'

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import {
  LanguageCode,
  DepositedQuery,
  DepositedTranslationInput,
  DepositedUpdateInput,
  Scalars,
} from '@graphql'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { first } from 'rxjs/operators'
import { DepositedService } from '@http/deposited-service/deposited.service'
import { Store } from '@ngxs/store'
import { UpdateDeposited } from '../../store/actions'
import { MatSnackBar } from '@angular/material/snack-bar'
import { FormModel } from '@shared/modules/crud/types/crud-form-model.types'

@Component({
  selector: 'update-deposited-dialog',
  templateUrl: './update-deposited-dialog.component.html',
  styleUrls: ['./update-deposited-dialog.component.scss'],
})
export class UpdateDepositedDialogComponent implements OnInit {
  depositedUpdateForm: FormGroup

  depositedId: Scalars['ID']

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private depositedsService: DepositedService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<UpdateDepositedDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data?
  ) {
    this.depositedId = data.id
  }

  ngOnInit(): void {
    this.setDepositedForm()
  }

  setDepositedForm = async (): Promise<void> => {
    const { deposited } = await this.loadDeposited()

    const { index, oecd, year, uak } = deposited

    const { translation } = deposited

    const oecdCode = oecd ? oecd.code : null

    const translationFormKA: FormModel<DepositedTranslationInput> = {
      id: [translation[0].id],
      title: [translation[0].title],
      author: [translation[0].author],
      institute: [translation[0].institute],
      resume: [translation[0].resume],
      language: [LanguageCode.KA],
    }
    const translationFormEN: FormModel<DepositedTranslationInput> = {
      id: [translation[1].id],
      title: [translation[1].title],
      author: [translation[1].author],
      institute: [translation[1].institute],
      resume: [translation[1].resume],
      language: [LanguageCode.RU],
    }

    const translationFormGroupKA = this.fb.group(translationFormKA)
    const translationFormGroupEN = this.fb.group(translationFormEN)

    const form: FormModel<DepositedUpdateInput> = {
      id: [this.depositedId],
      index: [index, Validators.required],
      oecd: [oecdCode],
      year: [year],
      uak: [uak],
      translation: this.fb.array([
        translationFormGroupKA,
        translationFormGroupEN,
      ]),
    }

    this.depositedUpdateForm = this.fb.group(form)
  }

  loadDeposited = (): Promise<DepositedQuery> => {
    return this.depositedsService
      .fetchSingle(this.depositedId)
      .pipe(first())
      .toPromise()
  }

  update = (): void => {
    const depositedUpdateInput: DepositedUpdateInput = this.depositedUpdateForm
      .value

    this.store
      .dispatch(new UpdateDeposited({ depositedUpdateInput }))
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
