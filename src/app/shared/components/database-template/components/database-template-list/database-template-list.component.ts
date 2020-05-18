import { Component, Input } from '@angular/core'

@Component({
  selector: 'database-template-list',
  templateUrl: './database-template-list.component.html',
  styleUrls: ['./database-template-list.component.scss'],
})
export class DatabaseTemplateListComponent {
  @Input() count

  @Input() skeleton = true

  arr = new Array(5).fill(0)
  theme = {
    height: '100px',
    'border-radius': '10px',
    'box-shadow':
      '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
  }
}
