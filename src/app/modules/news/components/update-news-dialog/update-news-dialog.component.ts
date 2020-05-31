import { Component, Inject, OnInit } from '@angular/core'

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import {
  LanguageCode,
  NewsQuery,
  NewsTranslationInput,
  NewsUpdateInput,
  Scalars,
} from '@graphql'
import { FormBuilder, FormGroup } from '@angular/forms'
import { first } from 'rxjs/operators'
import { Store } from '@ngxs/store'
import { MatSnackBar } from '@angular/material/snack-bar'
import { UpdateNews } from '../../store/actions'
import { NewsService } from '@http/news-service'
import { FormModel } from '@shared/modules/crud/types/crud-form-model.types'

@Component({
  selector: 'update-news-dialog',
  templateUrl: './update-news-dialog.component.html',
  styleUrls: ['./update-news-dialog.component.scss'],
})
export class UpdateNewsDialogComponent implements OnInit {
  newsUpdateForm: FormGroup

  newsId: Scalars['ID']

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private newsesService: NewsService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<UpdateNewsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data?
  ) {
    this.newsId = data.id
  }

  ngOnInit(): void {
    this.setNewsForm()
  }

  setNewsForm = async (): Promise<void> => {
    const { news } = await this.loadNews()

    const { translation } = news

    console.log(translation)
    const translationFormKA: FormModel<NewsTranslationInput> = {
      id: [translation[0]?.id],
      title: [translation[0]?.title],
      description: [translation[0]?.description],
      content: [translation[0]?.content],
      language: [LanguageCode.KA],
    }
    const translationFormEN: FormModel<NewsTranslationInput> = {
      id: [translation[1]?.id],
      title: [translation[1]?.title],
      description: [translation[1]?.description],
      content: [translation[1]?.content],
      language: [LanguageCode.EN],
    }

    const translationFormGroupKA = this.fb.group(translationFormKA)
    const translationFormGroupEN = this.fb.group(translationFormEN)

    const form: FormModel<NewsUpdateInput> = {
      id: [this.newsId],
      translation: this.fb.array([
        translationFormGroupKA,
        translationFormGroupEN,
      ]),
    }

    this.newsUpdateForm = this.fb.group(form)
  }

  loadNews = (): Promise<NewsQuery> => {
    return this.newsesService.fetchSingle(this.newsId).pipe(first()).toPromise()
  }

  update = (): void => {
    const newsUpdateInput: NewsUpdateInput = this.newsUpdateForm.value

    this.store
      .dispatch(new UpdateNews({ newsUpdateInput }))
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
