import { Component, Input } from '@angular/core'
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'input-text-area',
  templateUrl: './input-text-area.component.html',
  styleUrls: ['./input-text-area.component.scss'],
})
export class InputTextAreaComponent {
  @Input() inputFormGroup: FormGroup
  @Input() formCtrlName: string

  @Input() placeholder: string
  @Input() required = false
}
