import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-details-images',
  templateUrl: './product-details-images.component.html',
  styleUrls: ['./product-details-images.component.scss']
})
export class ProductDetailsImagesComponent implements OnInit {
  breakpoint = 1;
  images = [
    {src: '/assets/images/alika.jpeg'},
    {src: '/assets/images/geofolkfinal.png'}
  ];
  chosenImageSrc = this.images[0].src;

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

  chooseImage(src) {
    this.chosenImageSrc = src;
  }

}
