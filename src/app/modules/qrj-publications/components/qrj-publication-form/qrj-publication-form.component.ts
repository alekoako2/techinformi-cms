import { Component, Input, OnChanges } from '@angular/core'
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'qrj-publication-form',
  templateUrl: './qrj-publication-form.component.html',
  styleUrls: ['./qrj-publication-form.component.scss'],
})
export class QrjPublicationFormComponent implements OnChanges {
  @Input() qrjPublicationForm: FormGroup

  translationFormGroupKA: FormGroup
  translationFormGroupEN: FormGroup

  ngOnChanges(): void {
    if (this.qrjPublicationForm) {
      this.translationFormGroupKA = this.qrjPublicationForm
        ?.get('translation')
        ?.get('0') as FormGroup
      this.translationFormGroupEN = this.qrjPublicationForm
        ?.get('translation')
        ?.get('1') as FormGroup
    }
  }

  numbersRange = (startFrom: number, n: number): string[] =>
    [...Array(n).keys()].map((i) => (startFrom - i).toString())
}
