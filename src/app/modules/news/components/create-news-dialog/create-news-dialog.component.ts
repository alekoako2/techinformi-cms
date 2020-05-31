import { Component } from '@angular/core'

import { MatDialogRef } from '@angular/material/dialog'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Store } from '@ngxs/store'
import { MatSnackBar } from '@angular/material/snack-bar'
import { LanguageCode, NewsCreateInput, NewsTranslationInput } from '@graphql'
import { first } from 'rxjs/operators'
import { AddNews } from '../../store/actions'
import { FormModel } from '@shared/modules/crud/types/crud-form-model.types'

@Component({
  selector: 'create-news-dialog',
  templateUrl: './create-news-dialog.component.html',
  styleUrls: ['./create-news-dialog.component.scss'],
})
export class CreateNewsDialogComponent {
  newsCreateForm: FormGroup

  constructor(
    private store: Store,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateNewsDialogComponent>,
    private snackBar: MatSnackBar
  ) {
    this.buildForm()
  }

  buildForm = (): void => {
    const translationFormKA: FormModel<NewsTranslationInput> = {
      id: [null],
      title: [null],
      description: [null],
      content: [null],
      language: [LanguageCode.KA],
    }
    const translationFormEN: FormModel<NewsTranslationInput> = {
      id: [null],
      title: [null],
      description: [null],
      content: [null],
      language: [LanguageCode.EN],
    }

    const translationFormGroupKA = this.fb.group(translationFormKA)
    const translationFormGroupEN = this.fb.group(translationFormEN)

    const form: FormModel<NewsCreateInput> = {
      translation: this.fb.array([
        translationFormGroupKA,
        translationFormGroupEN,
      ]),
    }

    this.newsCreateForm = this.fb.group(form)
  }

  create = (): void => {
    const newsCreateInput: NewsCreateInput = this.newsCreateForm.value

    this.store
      .dispatch(new AddNews({ newsCreateInput }))
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
