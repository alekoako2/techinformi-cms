import { Injectable } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { map, tap } from 'rxjs/operators'
import {
  qrjPublicationQuery,
  qrjPublicationsQuery,
} from './gql/qrj-publication-query'
import { Observable } from 'rxjs'
import {
  CreateQrjPublicationMutationMutation,
  CreateQrjPublicationMutationMutationVariables,
  QrjPublication,
  QrjPublicationCreateInput,
  QrjPublicationQuery,
  QrjPublicationQueryInput,
  QrjPublicationsQuery,
  QrjPublicationsQueryVariables,
  Scalars,
} from '@graphql'
import { ApolloQueryResult } from 'apollo-client'
import { LanguageService } from '@services/language-service'
import { createQrjPublicationMutation } from './gql/qrj-publication-mutations'

@Injectable({
  providedIn: 'root',
})
export class QrjPublicationService {
  constructor(
    private apollo: Apollo,
    private languageService: LanguageService
  ) {}

  loadQrjPublications = (
    query: QrjPublicationQueryInput,
    pageIndex = 0,
    pageSize = 10
  ): Observable<QrjPublicationsQuery> => {
    return this.apollo
      .watchQuery<QrjPublicationsQuery, QrjPublicationsQueryVariables>({
        variables: {
          languageCode: this.languageService.currentLanguage,
          first: pageSize,
          skip: pageIndex * pageSize,
          query,
        },
        query: qrjPublicationsQuery,
      })
      .valueChanges.pipe(
        map((res: ApolloQueryResult<QrjPublicationsQuery>) => res.data)
      )
  }
  loadQrjPublication = (id: Scalars['ID']): Observable<QrjPublication> =>
    this.apollo
      .watchQuery<QrjPublicationQuery>({
        variables: {
          languageCode: this.languageService.currentLanguage,
          id,
        },
        query: qrjPublicationQuery,
      })
      .valueChanges.pipe(
        map(
          (res: ApolloQueryResult<QrjPublicationQuery>) =>
            res.data.qrjPublication
        )
      )

  createQrjPublication = (input: QrjPublicationCreateInput) =>
    this.apollo
      .mutate<
        CreateQrjPublicationMutationMutation,
        CreateQrjPublicationMutationMutationVariables
      >({
        variables: {
          input,
        },
        mutation: createQrjPublicationMutation,
      })
      .pipe(
        tap(console.log),
        map(
          (
            qrjPublicationData: ApolloQueryResult<
              CreateQrjPublicationMutationMutation
            >
          ) => qrjPublicationData.data
        ),
        tap(console.log)
      )
}
