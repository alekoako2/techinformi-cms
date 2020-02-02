import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {
  CountNewsesQuery,
  CreateNewsMutation,
  CreateNewsMutation_createNews, DeleteNewsMutation,
  NewsQuery,
  NewsesQuery, UpdateNewsMutation, UpdateNewsMutation_updateNews
} from '../../../../types/operation-result-types';
import {countNewsesQuery, newsQuery, newsesQuery} from '../../news/services/news-query';
import {map} from 'rxjs/operators';
import {createNewsMutation, deleteNewsMutation, updateNewsMutation} from '../../news/services/news-mutations';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private apollo: Apollo, @Inject(LOCALE_ID) public localeId: string) {
  }

  newsesCount() {
    return this.apollo
      .watchQuery<CountNewsesQuery>({
        query: countNewsesQuery
      }).valueChanges
      .pipe(
        map(count => count.data)
      );
  }

  loadNewses(searchText = '', index = 0, limit = 10) {
    return this.apollo
      .watchQuery<NewsesQuery>({
        variables: {
          languageCode: this.localeId.toUpperCase(),
          first: limit,
          skip: index * limit,
          query: searchText
        },
        query: newsesQuery
      }).valueChanges.pipe(map(newsesData => newsesData.data));
  }

  getNews(id) {
    return this.apollo
      .watchQuery<NewsQuery>({
        variables: {
          id
        },
        query: newsQuery
      })
      .valueChanges
      .pipe(
        map(newsData => newsData.data)
      );
  }

  createNews(input: CreateNewsMutation_createNews) {
    return this.apollo
      .mutate<CreateNewsMutation>({
        variables: {
          translation: [
            {
              title: input.translation[0].title,
              description: input.translation[0].description,
              content: input.translation[0].content,
              language: 'KA'
            },
            {
              title: input.translation[1].title,
              description: input.translation[1].description,
              content: input.translation[1].content,
              language: 'EN'
            }
          ],
        },
        mutation: createNewsMutation
      })
      .pipe(
        map(newsData => newsData.data)
      );
  }

  updateNews(input: UpdateNewsMutation_updateNews) {
    return this.apollo
      .mutate<UpdateNewsMutation>({
        variables: {
          id: input.id,
          translation: [
            {
              title: input.translation[0].title,
              description: input.translation[0].description,
              content: input.translation[0].content,
              language: 'KA'
            },
            {
              title: input.translation[1].title,
              description: input.translation[1].description,
              content: input.translation[1].content,
              language: 'EN'
            }
          ],
        },
        mutation: updateNewsMutation
      })
      .pipe(
        map(newsData => newsData.data)
      );
  }

  deleteNews(id: string) {
    return this.apollo
      .mutate<DeleteNewsMutation>({
        variables: {
          id: id
        },
        mutation: deleteNewsMutation
      })
      .pipe(
        map(newsIndex => newsIndex.data)
      );
  }

}
