import { Component, Input, OnChanges } from '@angular/core'
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'qrj-journal-form',
  templateUrl: './qrj-journal-form.component.html',
  styleUrls: ['./qrj-journal-form.component.scss'],
})
export class QrjJournalFormComponent implements OnChanges {
  @Input() qrjJournalForm: FormGroup

  translationFormGroupKA: FormGroup
  translationFormGroupEN: FormGroup

  ngOnChanges(): void {
    if (this.qrjJournalForm) {
      this.translationFormGroupKA = this.qrjJournalForm
        ?.get('translation')
        ?.get('0') as FormGroup
      this.translationFormGroupEN = this.qrjJournalForm
        ?.get('translation')
        ?.get('1') as FormGroup
    }
  }
}
