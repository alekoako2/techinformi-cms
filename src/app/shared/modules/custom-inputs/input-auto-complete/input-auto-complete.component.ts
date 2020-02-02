import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {QrjJournalsQuery} from '../../../../types/operation-result-types';

@Component({
  selector: 'app-input-auto-complete',
  templateUrl: './input-auto-complete.component.html',
  styleUrls: ['./input-auto-complete.component.scss']
})
export class InputAutoCompleteComponent implements OnInit {

  @Input() inputModel: any;
  @Output() inputModelChange = new EventEmitter<any>();

  @Input() placeholder: string;

  @Input() listName: string;

  @Input() name: string;
  @Input() required: boolean = false;

  @Input() list;

  options = [];

  inputControl = new FormControl();

  filteredInputOptions: Observable<string[]>;

  constructor() {
  }

  ngOnInit() {

    if (this.list) {
      this.list.subscribe(res => {
        this.options = res[this.listName];
        this.filteredInputOptions = this.inputControl.valueChanges
          .pipe(
            startWith(''),
            map(value => typeof value === 'string' ? value : value.name),
            map(name => name ? this._filter(name) : this.options.slice())
          );
        if (Object.keys(this.inputModel).length !== 0) {
          this.inputControl.setValue(this.inputModel);
        }
      });
    }
  }


  displayFn(item?: any): string | undefined {
    return item ? item.translation[0].name : undefined;
  }

  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.translation[0].name.toLowerCase().indexOf(filterValue) === 0);
  }

}
