import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core'
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'deposited-form',
  templateUrl: './deposited-form.component.html',
  styleUrls: ['./deposited-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepositedFormComponent implements OnChanges {
  @Input() depositedForm: FormGroup

  translationFormGroupKA: FormGroup
  translationFormGroupRU: FormGroup

  ngOnChanges(): void {
    if (this.depositedForm) {
      this.translationFormGroupKA = this.depositedForm
        ?.get('translation')
        ?.get('0') as FormGroup
      this.translationFormGroupRU = this.depositedForm
        ?.get('translation')
        ?.get('1') as FormGroup
    }
  }

  numbersRange = (startFrom: number, n: number): string[] =>
    [...Array(n).keys()].map((i) => (startFrom - i).toString())
}
