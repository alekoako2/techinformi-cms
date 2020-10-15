import { Component } from '@angular/core'

import { MatDialogRef } from '@angular/material/dialog'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngxs/store'
import { AddDeposited } from '../../store/actions'
import {
  LanguageCode,
  DepositedCreateInput,
  DepositedTranslationInput,
} from '@graphql'
import { first } from 'rxjs/operators'
import { MatSnackBar } from '@angular/material/snack-bar'
import { FormModel } from '@shared/modules/crud/types/crud-form-model.types'

@Component({
  selector: 'create-deposited-dialog',
  templateUrl: './create-deposited-dialog.component.html',
  styleUrls: ['./create-deposited-dialog.component.scss'],
})
export class CreateDepositedDialogComponent {
  depositedCreateForm: FormGroup

  constructor(
    private store: Store,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateDepositedDialogComponent>,
    private snackBar: MatSnackBar
  ) {
    this.buildForm()
  }

  buildForm = (): void => {
    const translationFormKA: FormModel<DepositedTranslationInput> = {
      title: [null],
      author: [null],
      institute: [null],
      resume: [null],
      language: [LanguageCode.KA],
    }
    const translationFormRU: FormModel<DepositedTranslationInput> = {
      title: [null],
      author: [null],
      institute: [null],
      resume: [null],
      language: [LanguageCode.RU],
    }

    const translationFormGroupKA = this.fb.group(translationFormKA)
    const translationFormGroupRU = this.fb.group(translationFormRU)

    const form: FormModel<DepositedCreateInput> = {
      index: [null, Validators.required],
      oecd: [null],
      uak: [null],
      year: [null],
      translation: this.fb.array([
        translationFormGroupKA,
        translationFormGroupRU,
      ]),
    }

    this.depositedCreateForm = this.fb.group(form)
  }

  create = (): void => {
    const depositedCreateInput: DepositedCreateInput = this.depositedCreateForm
      .value

    this.store
      .dispatch(new AddDeposited({ depositedCreateInput }))
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
