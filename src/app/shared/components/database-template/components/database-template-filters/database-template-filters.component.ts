import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'database-template-filters',
  templateUrl: './database-template-filters.component.html',
  styleUrls: ['./database-template-filters.component.scss'],
})
export class DatabaseTemplateFiltersComponent {
  @Output() searchPressed = new EventEmitter()
}
