import { Injectable } from '@angular/core'
import { Apollo } from 'apollo-angular'
import {
  qrjPublicationQueries,
  qrjPublicationsQuery,
} from './gql/qrj-publication.queries'
import { Observable } from 'rxjs'
import {
  CreateQrjPublicationMutation,
  DeleteQrjPublicationMutation,
  QrjPublicationCreateInput,
  QrjPublicationQuery,
  QrjPublicationQueryInput,
  QrjPublicationsQuery,
  QrjPublicationUpdateInput,
  Scalars,
  UpdateQrjPublicationMutation,
} from '@graphql'
import { LanguageService } from '@services/language-service'
import {
  createQrjPublicationMutation,
  deleteQrjPublicationMutation,
  updateQrjPublicationMutation,
} from './gql/qrj-publication.mutations'
import { CrudService } from '@interfaces/crud/crud-service.interfaces'
import {
  crudFetchAll,
  crudFetchSingle,
  crudCreate,
  crudDelete,
  crudUpdate,
} from '@utils/crud/crud-service.utils'

@Injectable({
  providedIn: 'root',
})
export class QrjPublicationService
  implements
    CrudService<
      QrjPublicationQueryInput,
      QrjPublicationsQuery,
      QrjPublicationQuery,
      QrjPublicationCreateInput,
      CreateQrjPublicationMutation,
      QrjPublicationUpdateInput,
      UpdateQrjPublicationMutation,
      DeleteQrjPublicationMutation
    > {
  constructor(
    private apollo: Apollo,
    private languageService: LanguageService
  ) {}

  fetchAll = (
    query: QrjPublicationQueryInput,
    pageIndex: 0,
    pageSize: 10
  ): Observable<QrjPublicationsQuery> => {
    return crudFetchAll<QrjPublicationQueryInput, QrjPublicationsQuery>(
      this.apollo,
      this.languageService.currentLanguage,
      qrjPublicationsQuery,
      query,
      pageIndex,
      pageSize
    )
  }

  fetchSingle = (id: Scalars['ID']): Observable<QrjPublicationQuery> => {
    return crudFetchSingle<QrjPublicationQuery>(
      this.apollo,
      this.languageService.currentLanguage,
      qrjPublicationQueries,
      id
    )
  }

  create = (
    input: QrjPublicationCreateInput
  ): Observable<CreateQrjPublicationMutation> => {
    console.log(input)
    return crudCreate<QrjPublicationCreateInput, CreateQrjPublicationMutation>(
      this.apollo,
      this.languageService.currentLanguage,
      createQrjPublicationMutation,
      input
    )
  }

  update = (
    input: QrjPublicationUpdateInput
  ): Observable<UpdateQrjPublicationMutation> => {
    console.log(input)
    return crudUpdate<QrjPublicationUpdateInput, UpdateQrjPublicationMutation>(
      this.apollo,
      this.languageService.currentLanguage,
      updateQrjPublicationMutation,
      input
    )
  }

  delete = (id: Scalars['ID']): Observable<DeleteQrjPublicationMutation> => {
    return crudDelete<DeleteQrjPublicationMutation>(
      this.apollo,
      deleteQrjPublicationMutation,
      id
    )
  }
}
