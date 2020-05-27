import { Component, EventEmitter, Input, Output } from '@angular/core'

export interface InputSelectListItem {
  key: string
  name: string
}
@Component({
  selector: 'input-select-with-key',
  templateUrl: './input-select-with-key.component.html',
  styleUrls: ['./input-select-with-key.component.scss'],
})
export class InputSelectWithKeyComponent {
  @Input() inputSelectModel: string
  @Output() inputSelectModelChange = new EventEmitter<string>()
  @Input() label: string
  @Input() list: InputSelectListItem[]
  @Input() name: string
  @Input() required = false
}
