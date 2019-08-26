import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  @Input() inputModel: any = '';
  @Output() inputModelChange = new EventEmitter<string>();
  @Input() placeholder: string;
  @Input() hintText: string;

  constructor() {
  }

  ngOnInit() {
  }

}
