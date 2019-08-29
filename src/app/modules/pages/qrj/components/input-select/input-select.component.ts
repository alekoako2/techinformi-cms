import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ControlContainer, FormControl, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss'],
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class InputSelectComponent implements OnInit {

  @Input() inputSelectModel: any;
  @Output() inputSelectModelChange = new EventEmitter<string>();
  @Input() label: string;
  @Input() array: number[];
  @Input() name: string;
  @Input() required: boolean = false;


  constructor(private controlContainer: ControlContainer) {
  }

  ngOnInit() {
  }

}
