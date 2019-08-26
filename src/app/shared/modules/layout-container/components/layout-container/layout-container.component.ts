import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.scss']
})
export class LayoutContainerComponent implements OnInit {
  @Input() backgroundColor?;
  @Input() flexWidth = 80;
  @Input() layoutStyle = 'column';
  @Input() ltLg?;

  constructor() {
  }

  ngOnInit() {
  }

}
