import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})
export class InputSelectComponent implements OnInit {

  @Input() label: string;
  @Input() valueModel: string;
  @Output() valueModelChange = new EventEmitter<string>();
  @Input() array: number[];


  constructor() {
  }

  ngOnInit() {
  }

}
