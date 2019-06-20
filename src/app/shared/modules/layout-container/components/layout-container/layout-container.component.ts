import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.scss']
})
export class LayoutContainerComponent implements OnInit {
  @Input() backgroundColor?;

  @Input() layoutStyle?;
  @Input() ltLg?;

  constructor() {
  }

  ngOnInit() {
  }

}
