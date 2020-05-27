import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'database-template-paginator',
  templateUrl: './database-template-paginator.component.html',
  styleUrls: ['./database-template-paginator.component.scss'],
})
export class DatabaseTemplatePaginatorComponent {
  @Output() loadPressed = new EventEmitter<{
    pageIndex: number
    pageSize: number
  }>()

  @Input() pageIndex = 0
  @Input() pageSize = 10
  @Input() length = 0
}
