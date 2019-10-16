import {Component, OnInit} from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {NewsQuery_news, NewsesQuery_newses} from '../../../../../types/operation-result-types';
import {NewsUpdateCreateDialogComponent} from '../../components/news-update-create-dialog/news-update-create-dialog.component';
import {NewsDeleteDialogComponent} from '../../components/news-delete-dialog/news-delete-dialog.component';
import {CountNewses, GetNews, LoadNewses} from '../../state/news.actions';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  @Select(state => state.news.newses) newses$: Observable<NewsesQuery_newses[]>;
  @Select(state => state.news.count) countNewses$: Observable<number>;
  @Select(state => state.news.news) news$: Observable<NewsQuery_news>;

  NewsUpdateCreateDialogComponent = NewsUpdateCreateDialogComponent;
  NewsDeleteDialogComponent = NewsDeleteDialogComponent;

  CountNewses = CountNewses;
  GetNews = GetNews;
  LoadNewses = LoadNewses;

  constructor() {
  }

  ngOnInit() {
  }

}
