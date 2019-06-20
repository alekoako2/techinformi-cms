import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.scss']
})
export class TopToolbarComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter();
  hidden = true;

  constructor() {
  }

  ngOnInit() {
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
}
