import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'database-template',
  templateUrl: './database-template.component.html',
  styleUrls: ['./database-template.component.scss'],
})
export class DatabaseTemplateComponent {
  @Output() loadPressed = new EventEmitter<{
    pageIndex: number
    pageSize: number
  }>()

  @Output() searchPressed = new EventEmitter()

  @Input() pageIndex = 0
  @Input() pageSize = 10
  @Input() length = 0

  @Input() skeleton = true
}
