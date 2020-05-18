import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss'],
})
export class InputSelectComponent {
  @Output() inputSelectModelChange = new EventEmitter<number | string>()
  @Input() inputSelectModel: number | string

  @Input() array: number[] | string[]
  @Input() required = false
  @Input() label: string
  @Input() name: string
}
