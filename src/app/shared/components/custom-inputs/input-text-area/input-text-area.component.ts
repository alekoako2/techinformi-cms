import { Component, EventEmitter, Input, Output } from '@angular/core'
import { ControlContainer, NgForm } from '@angular/forms'

@Component({
  selector: 'input-text-area',
  templateUrl: './input-text-area.component.html',
  styleUrls: ['./input-text-area.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class InputTextAreaComponent {
  @Input() inputTextAreaModel: string
  @Output() inputTextAreaModelChange = new EventEmitter<string>()
  @Input() placeholder: string
  @Input() name: string
  @Input() required = false
}
