import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ControlContainer, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-input-text-area',
  templateUrl: './input-text-area.component.html',
  styleUrls: ['./input-text-area.component.scss'],
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class InputTextAreaComponent implements OnInit {
  @Input() inputTextAreaModel: any;
  @Output() inputTextAreaModelChange = new EventEmitter<string>();
  @Input() placeholder: string;
  @Input() name: string;
  @Input() required: boolean = false;


  constructor(private controlContainer: ControlContainer) {
  }

  ngOnInit() {
  }

}
