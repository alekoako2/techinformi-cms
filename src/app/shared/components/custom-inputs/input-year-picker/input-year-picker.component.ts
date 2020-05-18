import { Component, EventEmitter, Input, Output } from '@angular/core'
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter'
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core'

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
}

@Component({
  selector: 'input-year-picker',
  templateUrl: './input-year-picker.component.html',
  styleUrls: ['./input-year-picker.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class InputYearPickerComponent {
  @Output() dateChange = new EventEmitter<Date>()
  @Input() date: Date
  @Input() required = false
  @Input() name: string

  currentYear = new Date().getFullYear()
  @Input() minDate = new Date(this.currentYear - 100, 0, 0)
  @Input() maxDate = new Date(this.currentYear + 6, 0, 0)
  @Input() label = 'choose'

  chosenYearHandler(date, datepicker): void {
    this.date = new Date(date)
    this.dateChange.emit(this.date)
    datepicker.close()
  }
}
