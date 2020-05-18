import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'input-multiple-select',
  templateUrl: './input-multiple-select.component.html',
  styleUrls: ['./input-multiple-select.component.scss'],
})
export class InputMultipleSelectComponent implements OnInit {
  @Input() inputModel: [{}][]
  inputModel2 = []
  @Output() inputModelChange = new EventEmitter<[{}][]>()

  @Input() placeholder: string

  @Input() name: string
  @Input() required = false
  array = []

  @Input() list
  @Input() listFieldName
  @Input() listFieldValueName

  ngOnInit(): void {
    for (let i = 0; i < this.inputModel.length; i++) {
      this.inputModel2.push(this.inputModel[i][this.listFieldValueName])
    }
    this.inputModel = this.array
  }

  onChange(event): void {
    const items = []
    for (let i = 0; i < event.length; i++) {
      items.push({ code: event[i] })
    }
    this.inputModelChange.emit(items)
  }
}
