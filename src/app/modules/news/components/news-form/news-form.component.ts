import { Component, Input, OnChanges } from '@angular/core'
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss'],
})
export class NewsFormComponent implements OnChanges {
  @Input() newsForm: FormGroup

  translationFormGroupKA: FormGroup
  translationFormGroupEN: FormGroup

  ngOnChanges(): void {
    if (this.newsForm) {
      this.translationFormGroupKA = this.newsForm
        ?.get('translation')
        ?.get('0') as FormGroup
      this.translationFormGroupEN = this.newsForm
        ?.get('translation')
        ?.get('1') as FormGroup
    }
  }
}
