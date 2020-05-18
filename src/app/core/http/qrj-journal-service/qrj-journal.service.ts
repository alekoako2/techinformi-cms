import { Inject, Injectable, LOCALE_ID } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { map } from 'rxjs/operators'
import { qrjJournalsQuery } from './gql/journal-query'
import { Observable } from 'rxjs'
import {
  QrjJournal,
  QrjJournalsQuery,
  QrjJournalsQueryVariables,
} from '@graphql'
import { ApolloQueryResult } from 'apollo-client'
import { LanguageService } from '@services/language-service'

@Injectable({
  providedIn: 'root',
})
export class QrjJournalService {
  constructor(
    private apollo: Apollo,
    private languageService: LanguageService
  ) {}

  loadQrjJournals(
    searchText = '',
    index?: number,
    limit?: number,
    orderBy?: string
  ): Observable<QrjJournal[]> {
    return this.apollo
      .watchQuery<QrjJournalsQuery, QrjJournalsQueryVariables>({
        variables: {
          languageCode: this.languageService.currentLanguage,
          first: limit,
          skip: index * limit,
          orderBy,
          query: { code: searchText, name: searchText },
        },
        query: qrjJournalsQuery,
      })
      .valueChanges.pipe(
        map(
          (qrjJournalsData: ApolloQueryResult<QrjJournalsQuery>) =>
            qrjJournalsData.data.qrjJournals
        )
      )
  }
}
