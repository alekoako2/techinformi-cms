import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-text-area',
  templateUrl: './input-text-area.component.html',
  styleUrls: ['./input-text-area.component.scss']
})
export class InputTextAreaComponent implements OnInit {
  @Input() inputModel: any;
  @Output() inputModelChange = new EventEmitter<string>();
  @Input() placeholder: string;
  @Input() hintText: string;

  constructor() {
  }

  ngOnInit() {
  }

}
