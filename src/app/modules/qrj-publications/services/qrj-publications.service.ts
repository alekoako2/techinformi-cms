// import { Injectable } from '@angular/core'
// import { Apollo } from 'apollo-angular'
// import { LanguageService } from '@services/language-service'
// import {
//   QrjPublication,
//   QrjPublicationQuery,
//   QrjPublicationQueryInput,
//   QrjPublicationsQuery,
//   QrjPublicationsQueryVariables,
//   Scalars,
// } from '@graphql'
// import { Observable } from 'rxjs'
// import {
//   qrjPublicationQuery,
//   qrjPublicationsQuery,
// } from './qrj-publications-crud-query'
// import { map } from 'rxjs/operators'
// import { ApolloQueryResult } from 'apollo-client'
//
// @Injectable({
//   providedIn: 'root',
// })
// export class QrjPublicationService {
//   constructor(
//     private apollo: Apollo,
//     private languageService: LanguageService
//   ) {}
//
//   loadQrjPublications = (
//     query: QrjPublicationQueryInput,
//     qrj-publications = 0,
//     limit = 10
//   ): Observable<QrjPublicationsQuery> =>
//     this.apollo
//       .watchQuery<QrjPublicationsQuery, QrjPublicationsQueryVariables>({
//         variables: {
//           languageCode: this.languageService.currentLanguage,
//           first: limit,
//           skip: qrj-publications * limit,
//           query,
//         },
//         query: qrjPublicationsQuery,
//       })
//       .valueChanges.pipe(
//         map((res: ApolloQueryResult<QrjPublicationsQuery>) => res.data)
//       )
//
//   loadQrjPublication = (id: Scalars['ID']): Observable<QrjPublication> =>
//     this.apollo
//       .watchQuery<QrjPublicationQuery>({
//         variables: {
//           languageCode: this.languageService.currentLanguage,
//           id,
//         },
//         query: qrjPublicationQuery,
//       })
//       .valueChanges.pipe(
//         map(
//           (res: ApolloQueryResult<QrjPublicationQuery>) =>
//             res.data.qrjPublication
//         )
//       )
//
//   createQrjPublication(
//     input: CreateQrjPublicationMutation_createQrjPublication
//   ) {
//     return this.apollo
//       .mutate<CreateQrjPublicationMutation>({
//         variables: {
//           qrj-publications: input.qrj-publications,
//           year: input.year,
//           number: input.number,
//           pages: input.pages,
//           oecd: input.oecd.code,
//           journal: input.journal.code,
//           title: input.translation[0].title,
//           publicationAuthor: input.translation[0].publicationAuthor,
//           publicationLang: input.translation[0].publicationLang,
//           abstract: input.translation[0].abstract,
//           titleEng: input.translation[1].title,
//           publicationAuthorEng: input.translation[1].publicationAuthor,
//           publicationLangEng: input.translation[1].publicationLang,
//           abstractEng: input.translation[1].abstract,
//         },
//         mutation: createQrjPublicationMutation,
//       })
//       .pipe(map((qrjPublicationData) => qrjPublicationData.data))
//   }
//
//   updateQrjPublication(
//     input: UpdateQrjPublicationMutation_updateQrjPublication
//   ) {
//     return this.apollo
//       .mutate<UpdateQrjPublicationMutation>({
//         variables: {
//           id: input.id,
//           qrj-publications: input.qrj-publications,
//           year: input.year,
//           number: input.number,
//           pages: input.pages,
//           oecd: input.oecd.code,
//           journal: input.journal.code,
//           title: input.translation[0].title,
//           publicationAuthor: input.translation[0].publicationAuthor,
//           publicationLang: input.translation[0].publicationLang,
//           abstract: input.translation[0].abstract,
//           titleEng: input.translation[1].title,
//           publicationAuthorEng: input.translation[1].publicationAuthor,
//           publicationLangEng: input.translation[1].publicationLang,
//           abstractEng: input.translation[1].abstract,
//         },
//         mutation: updateQrjPublicationMutation,
//       })
//       .pipe(map((qrjPublicationData) => qrjPublicationData.data))
//   }
//
//   deleteQrjPublication(id: string) {
//     return this.apollo
//       .mutate<DeleteQrjPublicationMutation>({
//         variables: {
//           id: id,
//         },
//         mutation: deleteQrjPublicationMutation,
//       })
//       .pipe(map((qrjPublicationIndex) => qrjPublicationIndex.data))
//   }
// }
