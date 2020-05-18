import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent {
  @Output() inputModelChange = new EventEmitter<string>()
  @Input() inputModel: string
  @Input() placeholder: string
  @Input() required = false
  @Input() name: string
  @Input() type = 'text'
}
