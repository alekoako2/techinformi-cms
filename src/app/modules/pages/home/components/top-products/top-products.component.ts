import {Component, OnInit} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';

export interface TopProduct {
  img: string;
  cols: number;
  rows: number;
  title: string;
  category: string;
  liquidation: number;
  price: number;
}

@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.scss']
})
export class TopProductsComponent implements OnInit {
  breakpoint = 1;
  tiles: TopProduct[] = [
    {
      title: 'One',
      category: 'mobile',
      liquidation: 5,
      cols: 1,
      rows: 1,
      img: 'https://images-na.ssl-images-amazon.com/images/I/51CgKGfMelL._AC_SR201,266_.jpg',
      price: 3,
    },
    {
      title: 'Two',
      category: 'mobile',
      liquidation: 5,
      cols: 1,
      rows: 1,
      img: 'https://images-na.ssl-images-amazon.com/images/I/71KMhLejRNL._AC._SR360,460.jpg',
      price: 3,
    },
    {
      title: 'Three',
      category: 'mobile',
      liquidation: 5,
      cols: 1,
      rows: 1,
      img: 'https://images-na.ssl-images-amazon.com/images/I/514sdLIKGML._AC._SR360,460.jpg',
      price: 3,
    },
    {
      title: 'Four',
      category: 'mobile',
      liquidation: 5,
      cols: 1,
      rows: 1,
      img: 'https://images-na.ssl-images-amazon.com/images/I/81rOtfzI0QL._AC._SR360,460.jpg',
      price: 3,
    },
    {
      title: 'Five',
      category: 'mobile',
      liquidation: 5,
      cols: 1,
      rows: 1,
      img: 'https://images-na.ssl-images-amazon.com/images/I/61xuIt4Q9kL._AC._SR360,460.jpg',
      price: 3,
    },
    {
      title: 'Six',
      category: 'mobile',
      liquidation: 5,
      cols: 1,
      rows: 1,
      img: 'https://images-na.ssl-images-amazon.com/images/I/518UNbV34gL._AC._SR360,460.jpg',
      price: 3,
    },
    {
      title: 'Seven',
      category: 'mobile',
      liquidation: 5,
      cols: 1,
      rows: 1,
      img: 'https://images-na.ssl-images-amazon.com/images/I/51aq4zNIGGL._AC._SR360,460.jpg',
      price: 3,
    },
    {
      title: 'Eight',
      category: 'mobile',
      liquidation: 5,
      cols: 1,
      rows: 1,
      img: 'https://images-na.ssl-images-amazon.com/images/I/51+8KLtfQRL._AC._SR360,460.jpg',
      price: 3,
    },
  ];

  constructor() {
  }

  ngOnInit() {
    this.resize();
  }

  resize() {
    this.breakpoint = window.innerWidth <= 3300 ? 4 : 6;
    this.breakpoint = window.innerWidth <= 1300 ? 3 : this.breakpoint;
    this.breakpoint = window.innerWidth <= 990 ? 2 : this.breakpoint;
    this.breakpoint = window.innerWidth <= 600 ? 1 : this.breakpoint;
  }

}
