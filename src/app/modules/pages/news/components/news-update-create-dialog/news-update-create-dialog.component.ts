import {Component, Inject, OnInit} from '@angular/core';
import {
  NewsQuery_news,
  NewsQuery_news_translation, OecdsQuery,
  OecdsQuery_oecds
} from '../../../../../types/operation-result-types';
import {Store} from '@ngxs/store';
import {OecdService} from '../../../oecd/OecdService/oecd.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CreateNews, UpdateNews} from '../../../news/state/news.actions';

@Component({
  selector: 'app-news-update-create-dialog',
  templateUrl: './news-update-create-dialog.component.html',
  styleUrls: ['./news-update-create-dialog.component.scss']
})
export class NewsUpdateCreateDialogComponent implements OnInit {
  showCreate: boolean = true;
  newsData: NewsQuery_news;
  oecdList: OecdsQuery_oecds[];
  languageList = [
    {
      code: 'EN',
      name: 'English'
    },
    {
      code: 'FR',
      name: 'French'
    },
    {
      code: 'DE',
      name: 'German'
    },
    {
      code: 'RU',
      name: 'Russian'
    },
    {
      code: 'ES',
      name: 'Spanish'
    },
    {
      code: 'IT',
      name: 'Italian'
    }
  ];

  constructor(
    private store: Store,
    private oecdService: OecdService,
    public dialogRef: MatDialogRef<NewsUpdateCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data?
  ) {

    this.newsData = <NewsQuery_news> {};
    this.newsData.translation = <NewsQuery_news_translation[]> [];
    this.newsData.translation[0] = <NewsQuery_news_translation> {};
    this.newsData.translation[1] = <NewsQuery_news_translation> {};

    if (data) {
      this.showCreate = false;
      this.newsData = data.news.news;
    }
  }

  ngOnInit() {
    this.oecdService.loadOecds()
      .subscribe((res: OecdsQuery) => {
        this.oecdList = res.oecds;
      });
  }

  create() {
    this.store.dispatch(new CreateNews(this.newsData));
    this.dialogRef.close();
  }

  update() {
    this.store.dispatch(new UpdateNews(this.newsData));
    this.dialogRef.close();
  }

  test(item) {
    console.log(item);
  }

}
