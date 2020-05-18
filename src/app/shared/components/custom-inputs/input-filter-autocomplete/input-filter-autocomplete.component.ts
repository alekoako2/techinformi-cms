import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { MatChipInputEvent } from '@angular/material/chips'
import { COMMA, ENTER } from '@angular/cdk/keycodes'
import { FormControl } from '@angular/forms'
import { Observable } from 'rxjs'
import { map, startWith } from 'rxjs/operators'

@Component({
  selector: 'input-filter-autocomplete',
  templateUrl: './input-filter-autocomplete.component.html',
  styleUrls: ['./input-filter-autocomplete.component.scss'],
})
export class InputFilterAutocompleteComponent implements OnInit {
  @Input() inputModel: string[] = []
  @Output() inputModelChange = new EventEmitter<string[]>()
  @Input() placeholder: string
  @Input() name: string
  @Input() required = false
  @Input() options: string[] = []
  myControl = new FormControl()
  filteredOptions: Observable<string[]>

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    )
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase()

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    )
  }
}
