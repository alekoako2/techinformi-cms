import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-responsive-search',
  templateUrl: './responsive-search.component.html',
  styleUrls: ['./responsive-search.component.scss']
})
export class ResponsiveSearchComponent implements OnInit {
  @Output() closeSearch = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onCloseResponsiveSearch() {
    this.closeSearch.emit();
  }
}
