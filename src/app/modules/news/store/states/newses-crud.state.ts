import { Action, State, StateContext, Store } from '@ngxs/store'
import { AddNews, DeleteNews, LoadNewses, UpdateNews } from '../actions'
import { NewsService } from '@http/news-service'
import {
  CreateNewsMutation,
  DeleteNewsMutation,
  News,
  NewsesQuery,
  UpdateNewsMutation,
} from '@graphql'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { first, tap } from 'rxjs/operators'
import { patch, updateItem } from '@ngxs/store/operators'

export class NewsesStateModel {
  public newses: News[]
  public countNewses: number
}

@State<NewsesStateModel>({
  name: 'newses',
  defaults: {
    newses: [],
    countNewses: 0,
  },
})
@Injectable()
export class NewsesCrudState {
  constructor(private store: Store, private newsesService: NewsService) {}

  @Action(LoadNewses)
  loadNewses(
    { patchState }: StateContext<NewsesStateModel>,
    { payload: { searchText, pageIndex, pageSize } }: LoadNewses
  ): Observable<NewsesQuery> {
    return this.newsesService
      .fetchAll(
        {
          translation: { title: searchText },
        },
        pageIndex,
        pageSize
      )
      .pipe(
        first(),
        tap(({ newses, countNewses }: NewsesQuery) => {
          patchState({ newses, countNewses })
        })
      )
  }

  @Action(AddNews)
  addPublication(
    { getState, patchState }: StateContext<NewsesStateModel>,
    { payload: { newsCreateInput } }: AddNews
  ): Observable<CreateNewsMutation> {
    const { newses, countNewses } = getState()
    return this.newsesService.create(newsCreateInput).pipe(
      first(),
      tap(({ createNews }: CreateNewsMutation) => {
        patchState({
          newses: [createNews, ...newses.slice(0, -1)],
          countNewses: countNewses + 1,
        })
      })
    )
  }

  @Action(UpdateNews)
  updatePublication(
    { setState }: StateContext<NewsesStateModel>,
    { payload: { newsUpdateInput } }: UpdateNews
  ): Observable<UpdateNewsMutation> {
    return this.newsesService.update(newsUpdateInput).pipe(
      first(),
      tap(({ updateNews }: UpdateNewsMutation) => {
        setState(
          patch({
            newses: updateItem<News>(
              (news: News) => news.id === updateNews.id,
              patch(updateNews)
            ),
          })
        )
      })
    )
  }

  @Action(DeleteNews)
  deletePublication(
    { getState, patchState }: StateContext<NewsesStateModel>,
    { payload: { id } }: DeleteNews
  ): Observable<DeleteNewsMutation> {
    const { newses, countNewses } = getState()
    return this.newsesService.delete(id).pipe(
      first(),
      tap(() => {
        patchState({
          newses: newses.filter((news) => news.id !== id),
          countNewses: countNewses - 1,
        })
      })
    )
  }
}
