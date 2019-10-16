import {State, Action, StateContext, Store} from '@ngxs/store';
import {NewsService} from '../../news/services/news.service';
import {CountNewses, CreateNews, DeleteNews, GetNews, LoadNewses, UpdateNews} from '../../news/state/news.actions';
import {first, take, tap} from 'rxjs/operators';
import {patch, removeItem, updateItem} from '@ngxs/store/operators';
import {NewsQuery_news, NewsesQuery_newses} from '../../../../types/operation-result-types';

export class NewsStateModel {
  public newses: NewsesQuery_newses[];
  public count: number;
  public news: NewsQuery_news;
}

@State<NewsStateModel>({
  name: 'news',
})
export class NewsState {
  constructor(private store: Store, private newsService: NewsService) {
  }

  @Action(CountNewses)
  countAll({patchState}: StateContext<NewsStateModel>) {

    return this.newsService.newsesCount().pipe(take(1), tap(res => {

      patchState({count: res.countNewses});

    }));
  }

  @Action(LoadNewses)
  loadNewses({patchState}: StateContext<NewsStateModel>, action: LoadNewses) {

    let searchText = action.payload.searchText;
    let index = action.payload.index;
    let limit = action.payload.limit;

    return this.newsService.loadNewses(searchText, index, limit).pipe(take(1), tap(res => {


      patchState({newses: res.newses});

    }));
  }

  @Action(GetNews)
  getNews({patchState}: StateContext<NewsStateModel>, action: GetNews) {
    return this.newsService.getNews(action.payload.id).pipe(first(), tap(res => {
      patchState({news: res.news});
    }));
  }

  @Action(DeleteNews)
  deleteNews(ctx: StateContext<NewsStateModel>, action: DeleteNews) {
    return this.newsService.deleteNews(action.payload.id).pipe(first(), tap(res => {
      ctx.setState(
        patch({
          newses: removeItem<NewsesQuery_newses>(news => news.id === action.payload.id)
        })
      );
    }));
  }

  @Action(CreateNews)
  addNews(ctx: StateContext<NewsStateModel>, action: CreateNews) {
    return this.newsService.createNews(action.payload).pipe(first(), tap(res => {
      ctx.getState().newses.pop();
      ctx.patchState({
        newses: [
          res.createNews,
          ...ctx.getState().newses
        ]
      });
    }));
  }

  @Action(UpdateNews)
  updateNews(ctx: StateContext<NewsStateModel>, action: UpdateNews) {
    return this.newsService.updateNews(action.payload).pipe(first(), tap(res => {
      ctx.setState(
        patch({
          newses: updateItem<NewsesQuery_newses>(news => news.id === action.payload.id, patch(action.payload))
        })
      );
    }));
  }

}
