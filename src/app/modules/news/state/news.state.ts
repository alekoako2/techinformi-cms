// import { State, Action, StateContext, Store } from '@ngxs/store'
// import { NewsService } from '../services/news.service'
// import {
//   CountNewses,
//   CreateNews,
//   DeleteNews,
//   GetNews,
//   LoadNewses,
//   UpdateNews,
// } from './news.actions'
// import { first, take, tap } from 'rxjs/operators'
// import { patch, removeItem, updateItem } from '@ngxs/store/operators'
// import { News } from '@graphql'
//
// export class NewsStateModel {
//   public newses: News[]
//   public count: number
//   public news: News
// }
//
// @State<NewsStateModel>({
//   name: 'news',
// })
// export class NewsState {
//   constructor(private store: Store, private newsService: NewsService) {}
//
//   @Action(CountNewses)
//   countAll({ patchState }: StateContext<NewsStateModel>) {
//     return this.newsService.newsesCount().pipe(
//       take(1),
//       tap((res) => {
//         patchState({ count: res.countNewses })
//       })
//     )
//   }
//
//   @Action(LoadNewses)
//   loadNewses({ patchState }: StateContext<NewsStateModel>, action: LoadNewses) {
//     const searchText = action.payload.searchText
//     const qrj-publications = action.payload.qrj-publications
//     const limit = action.payload.limit
//
//     return this.newsService.loadNewses(searchText, qrj-publications, limit).pipe(
//       take(1),
//       tap((res) => {
//         patchState({ newses: res.newses })
//       })
//     )
//   }
//
//   @Action(GetNews)
//   getNews({ patchState }: StateContext<NewsStateModel>, action: GetNews) {
//     return this.newsService.getNews(action.payload.id).pipe(
//       first(),
//       tap((res) => {
//         patchState({ news: res.news })
//       })
//     )
//   }
//
//   @Action(DeleteNews)
//   deleteNews(ctx: StateContext<NewsStateModel>, action: DeleteNews) {
//     return this.newsService.deleteNews(action.payload.id).pipe(
//       first(),
//       tap((res) => {
//         ctx.setState(
//           patch({
//             newses: removeItem<News>((news) => news.id === action.payload.id),
//           })
//         )
//       })
//     )
//   }
//
//   @Action(CreateNews)
//   addNews(ctx: StateContext<NewsStateModel>, action: CreateNews) {
//     return this.newsService.createNews(action.payload).pipe(
//       first(),
//       tap((res) => {
//         ctx.getState().newses.pop()
//         ctx.patchState({
//           newses: [res.createNews, ...ctx.getState().newses],
//         })
//       })
//     )
//   }
//
//   @Action(UpdateNews)
//   updateNews(ctx: StateContext<NewsStateModel>, action: UpdateNews) {
//     return this.newsService.updateNews(action.payload).pipe(
//       first(),
//       tap((res) => {
//         ctx.setState(
//           patch({
//             newses: updateItem<News>(
//               (news) => news.id === action.payload.id,
//               patch(action.payload)
//             ),
//           })
//         )
//       })
//     )
//   }
// }
