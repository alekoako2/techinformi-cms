import {Component, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  pageEvent: PageEvent;

  constructor() {
  }

  ngOnInit() {
  }

}
