import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {OecdsQuery, OecdsQuery_oecds} from '../../../../types/operation-result-types';
import {OecdService} from '../../../../modules/pages/oecd/OecdService/oecd.service';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-input-auto-complete',
  templateUrl: './input-auto-complete.component.html',
  styleUrls: ['./input-auto-complete.component.scss']
})
export class InputAutoCompleteComponent implements OnChanges {

  @Input() inputModel: string;
  @Output() inputModelChange = new EventEmitter<string>();

  @Input() placeholder: string;
  
  @Input() name: string;
  @Input() required: boolean = false;

  @Input() list;

  inputControl = new FormControl();

  filteredInputOptions: Observable<OecdsQuery_oecds[]>;

  constructor() {
  }

  ngOnChanges() {
    this.filteredInputOptions = this.inputControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value, this.list))
      );
  }

  private _filter(value: string, array): any[] {
    if (array) {
      const filterValue = value.toLowerCase();
      return array.filter(item => item.code.toLowerCase().includes(filterValue));
    }
  }
}
