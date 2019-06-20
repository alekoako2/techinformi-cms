import {Component, OnInit} from '@angular/core';

export interface Tile {
  img: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent implements OnInit {
  breakpoint: number;
  tiles: Tile[] = [
    {text: 'საგალობლები', cols: 1, rows: 1, img: 'http://embryo.theironnetwork.org/assets/images/mobile.jpg'},
    {text: 'ფოლკლორი', cols: 1, rows: 1, img: 'http://embryo.theironnetwork.org/assets/images/sports.jpg'},
    {text: 'ქართული კლასიკა', cols: 1, rows: 1, img: 'http://embryo.theironnetwork.org/assets/images/headphone.jpg'},
    // {text: 'Four', cols: 1, rows: 1, img: 'http://embryo.theironnetwork.org/assets/images/t-shirts.jpg'},
    // {text: 'Five', cols: 1, rows: 1, img: 'http://embryo.theironnetwork.org/assets/images/watch.jpg'},
    // {text: 'Six', cols: 1, rows: 1, img: 'http://embryo.theironnetwork.org/assets/images/shoes.jpg'},
  ];

  constructor() {
  }

  ngOnInit() {
    this.resize();
  }

  resize() {
    this.breakpoint = window.innerWidth <= 3300 ? 3 : 6;
    this.breakpoint = window.innerWidth <= 760 ? 2 : this.breakpoint;
    this.breakpoint = window.innerWidth <= 450 ? 1 : this.breakpoint;
  }
}
