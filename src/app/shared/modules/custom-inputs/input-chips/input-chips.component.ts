import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatChipInputEvent} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-input-chips',
  templateUrl: './input-chips.component.html',
  styleUrls: ['./input-chips.component.scss']
})
export class InputChipsComponent implements OnInit {
  @Input() inputModel: string[] = [];
  @Output() inputModelChange = new EventEmitter<string[]>();
  @Input() placeholder: string;
  @Input() name: string;
  @Input() required: boolean = false;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;


    if ((value || '').trim()) {
      this.inputModel.push(value.trim());
    }
    if (input) {
      input.value = '';
    }

    this.inputModelChange.emit(this.inputModel);

  }

  remove(item): void {
    const index = this.inputModel.indexOf(item);

    if (index >= 0) {
      this.inputModel.splice(index, 1);
    }
    this.inputModelChange.emit(this.inputModel);

  }

  constructor() {
  }

  ngOnInit() {
  }

}
