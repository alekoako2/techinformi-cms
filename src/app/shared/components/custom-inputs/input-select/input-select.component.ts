import { Component, Input } from '@angular/core'
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss'],
})
export class InputSelectComponent {
  @Input() inputFormGroup: FormGroup
  @Input() formCtrlName: string

  @Input() options: number[] | string[]
  @Input() required = false
  @Input() label: string
}
