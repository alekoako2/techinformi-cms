import { Injectable } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { map } from 'rxjs/operators'
import { qrjJournalQuery, qrjJournalsQuery } from './gql/qrj-journal.queries'
import { Observable } from 'rxjs'
import {
  CreateQrjJournalMutation,
  DeleteQrjJournalMutation,
  DeleteQrjPublicationMutation,
  QrjJournal,
  QrjJournalCreateInput,
  QrjJournalQuery,
  QrjJournalQueryInput,
  QrjJournalsQuery,
  QrjJournalsQueryVariables,
  QrjJournalUpdateInput,
  Scalars,
  UpdateQrjJournalMutation,
} from '@graphql'
import { ApolloQueryResult } from 'apollo-client'
import { LanguageService } from '@services/language-service'
import { CrudService } from '@shared/modules/crud/interfaces/crud.service.interfaces'
import {
  crudCreate,
  crudDelete,
  crudFetchAll,
  crudFetchSingle,
  crudUpdate,
} from '@shared/modules/crud/utils/crud.utils'
import {
  createQrjJournalMutation,
  deleteQrjJournalMutation,
  updateQrjJournalMutation,
} from '@http/qrj-journal-service/gql/qrj-journal.mutations'

@Injectable({
  providedIn: 'root',
})
export class QrjJournalService
  implements
    CrudService<
      QrjJournalQueryInput,
      QrjJournalsQuery,
      QrjJournalQuery,
      QrjJournalCreateInput,
      CreateQrjJournalMutation,
      QrjJournalUpdateInput,
      UpdateQrjJournalMutation,
      DeleteQrjJournalMutation
    > {
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

  create(input: QrjJournalCreateInput): Observable<CreateQrjJournalMutation> {
    return crudCreate<QrjJournalCreateInput, CreateQrjJournalMutation>(
      this.apollo,
      this.languageService.currentLanguage,
      createQrjJournalMutation,
      input
    )
  }

  delete(id: Scalars['ID']): Observable<DeleteQrjJournalMutation> {
    return crudDelete<DeleteQrjPublicationMutation>(
      this.apollo,
      deleteQrjJournalMutation,
      id
    )
  }

  fetchAll(
    query: QrjJournalQueryInput,
    pageIndex: number,
    pageSize: number
  ): Observable<QrjJournalsQuery> {
    return crudFetchAll<QrjJournalQueryInput, QrjJournalsQuery>(
      this.apollo,
      this.languageService.currentLanguage,
      qrjJournalsQuery,
      query,
      pageIndex,
      pageSize
    )
  }

  fetchSingle(id: Scalars['ID']): Observable<QrjJournalQuery> {
    return crudFetchSingle<QrjJournalQuery>(
      this.apollo,
      this.languageService.currentLanguage,
      qrjJournalQuery,
      id
    )
  }

  update(input: QrjJournalUpdateInput): Observable<UpdateQrjJournalMutation> {
    return crudUpdate<QrjJournalUpdateInput, UpdateQrjJournalMutation>(
      this.apollo,
      this.languageService.currentLanguage,
      updateQrjJournalMutation,
      input
    )
  }
}
