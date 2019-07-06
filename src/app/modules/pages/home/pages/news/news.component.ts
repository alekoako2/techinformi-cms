import {Component, OnInit} from '@angular/core';
import {loginMutation} from '../../../../../core/services/AuthService/login.mutation';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(private apollo: Apollo) {
  }

  ngOnInit() {
  }

}