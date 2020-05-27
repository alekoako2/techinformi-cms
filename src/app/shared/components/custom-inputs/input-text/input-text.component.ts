import { Component, Input } from '@angular/core'
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent {
  @Input() inputFormGroup: FormGroup
  @Input() formCtrlName: string

  @Input() placeholder: string
  @Input() required = false
  @Input() type = 'text'
}
