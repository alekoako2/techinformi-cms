// import { Inject, Injectable, LOCALE_ID } from '@angular/core'
// import { Apollo } from 'apollo-angular'
//
// import { countNewsesQuery, newsQuery, newsesQuery } from './news-query'
// import { map } from 'rxjs/operators'
// import {
//   createNewsMutation,
//   deleteNewsMutation,
//   updateNewsMutation,
// } from './news-mutations'
//
// @Injectable({
//   providedIn: 'root',
// })
// export class NewsService {
//   constructor(
//     private apollo: Apollo,
//     @Inject(LOCALE_ID) public localeId: string
//   ) {}
//
//   loadNewses(searchText = '', qrj-publications = 0, limit = 10) {
//     return this.apollo
//       .watchQuery<NewsQuery>({
//         variables: {
//           languageCode: this.localeId.toUpperCase(),
//           first: limit,
//           skip: qrj-publications * limit,
//           query: searchText,
//         },
//         query: newsesQuery,
//       })
//       .valueChanges.pipe(map((newsesData) => newsesData.data))
//   }
//
//   getNews(id) {
//     return this.apollo
//       .watchQuery<NewsQuery>({
//         variables: {
//           id,
//         },
//         query: newsQuery,
//       })
//       .valueChanges.pipe(map((newsData) => newsData.data))
//   }
//
//   createNews(input: CreateNewsMutation_createNews) {
//     return this.apollo
//       .mutate<CreateNewsMutation>({
//         variables: {
//           translation: [
//             {
//               title: input.translation[0].title,
//               description: input.translation[0].description,
//               content: input.translation[0].content,
//               language: 'KA',
//             },
//             {
//               title: input.translation[1].title,
//               description: input.translation[1].description,
//               content: input.translation[1].content,
//               language: 'EN',
//             },
//           ],
//         },
//         mutation: createNewsMutation,
//       })
//       .pipe(map((newsData) => newsData.data))
//   }
//
//   updateNews(input: UpdateNewsMutation_updateNews) {
//     return this.apollo
//       .mutate<UpdateNewsMutation>({
//         variables: {
//           id: input.id,
//           translation: [
//             {
//               title: input.translation[0].title,
//               description: input.translation[0].description,
//               content: input.translation[0].content,
//               language: 'KA',
//             },
//             {
//               title: input.translation[1].title,
//               description: input.translation[1].description,
//               content: input.translation[1].content,
//               language: 'EN',
//             },
//           ],
//         },
//         mutation: updateNewsMutation,
//       })
//       .pipe(map((newsData) => newsData.data))
//   }
//
//   deleteNews(id: string) {
//     return this.apollo
//       .mutate<DeleteNewsMutation>({
//         variables: {
//           id: id,
//         },
//         mutation: deleteNewsMutation,
//       })
//       .pipe(map((newsIndex) => newsIndex.data))
//   }
// }
