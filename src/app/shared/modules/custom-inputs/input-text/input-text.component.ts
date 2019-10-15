import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ControlContainer, ControlValueAccessor, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class InputTextComponent implements OnInit {

  @Input() inputModel: any;
  @Output() inputModelChange = new EventEmitter<string>();
  @Input() placeholder: string;
  @Input() name: string;
  @Input() required: boolean = false;
  @Input() type: string = 'text';

  constructor() {
  }

  ngOnInit() {
  }


}
