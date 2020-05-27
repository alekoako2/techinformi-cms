import { Component, EventEmitter, Input, Output } from '@angular/core'
import { MatChipInputEvent } from '@angular/material/chips'
import { COMMA, ENTER } from '@angular/cdk/keycodes'

@Component({
  selector: 'input-chips',
  templateUrl: './input-chips.component.html',
  styleUrls: ['./input-chips.component.scss'],
})
export class InputChipsComponent {
  @Input() inputModel: string[] = []
  @Output() inputModelChange = new EventEmitter<string[]>()
  @Input() placeholder: string
  @Input() name: string
  @Input() required = false

  selectable = true
  removable = true
  addOnBlur = true
  readonly separatorKeysCodes: number[] = [ENTER, COMMA]

  add(event: MatChipInputEvent): void {
    const input = event.input
    const value = event.value

    if ((value || '').trim()) {
      this.inputModel.push(value.trim())
    }
    if (input) {
      input.value = ''
    }

    this.inputModelChange.emit(this.inputModel)
  }

  remove(item): void {
    const index = this.inputModel.indexOf(item)

    if (index >= 0) {
      this.inputModel.splice(index, 1)
    }
    this.inputModelChange.emit(this.inputModel)
  }
}
