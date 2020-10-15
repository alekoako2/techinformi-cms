import { Injectable } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { depositedQuery, depositedsQueries } from './gql/deposited.queries'
import { Observable } from 'rxjs'
import {
  CreateDepositedMutation,
  DeleteDepositedMutation,
  DepositedCreateInput,
  DepositedQuery,
  DepositedQueryInput,
  DepositedsQuery,
  DepositedUpdateInput,
  Scalars,
  UpdateDepositedMutation,
} from '@graphql'
import { LanguageService } from '@services/language-service'
import {
  createDepositedMutation,
  deleteDepositedMutation,
  updateDepositedMutation,
} from './gql/deposited.mutations'
import { CrudService } from '@shared/modules/crud/interfaces/crud.service.interfaces'
import {
  crudCreate,
  crudDelete,
  crudFetchAll,
  crudFetchSingle,
  crudUpdate,
} from '@shared/modules/crud/utils/crud.utils'

@Injectable({
  providedIn: 'root',
})
export class DepositedService
  implements
    CrudService<
      DepositedQueryInput,
      DepositedsQuery,
      DepositedQuery,
      DepositedCreateInput,
      CreateDepositedMutation,
      DepositedUpdateInput,
      UpdateDepositedMutation,
      DeleteDepositedMutation
    > {
  constructor(
    private apollo: Apollo,
    private languageService: LanguageService
  ) {}

  fetchAll = (
    query: DepositedQueryInput,
    pageIndex: 0,
    pageSize: 10
  ): Observable<DepositedsQuery> => {
    return crudFetchAll<DepositedQueryInput, DepositedsQuery>(
      this.apollo,
      this.languageService.currentLanguage,
      depositedsQueries,
      query,
      pageIndex,
      pageSize
    )
  }

  fetchSingle = (id: Scalars['ID']): Observable<DepositedQuery> => {
    return crudFetchSingle<DepositedQuery>(
      this.apollo,
      this.languageService.currentLanguage,
      depositedQuery,
      id
    )
  }

  create = (
    input: DepositedCreateInput
  ): Observable<CreateDepositedMutation> => {
    return crudCreate<DepositedCreateInput, CreateDepositedMutation>(
      this.apollo,
      this.languageService.currentLanguage,
      createDepositedMutation,
      input
    )
  }

  update = (
    input: DepositedUpdateInput
  ): Observable<UpdateDepositedMutation> => {
    return crudUpdate<DepositedUpdateInput, UpdateDepositedMutation>(
      this.apollo,
      this.languageService.currentLanguage,
      updateDepositedMutation,
      input
    )
  }

  delete = (id: Scalars['ID']): Observable<DeleteDepositedMutation> => {
    return crudDelete<DeleteDepositedMutation>(
      this.apollo,
      deleteDepositedMutation,
      id
    )
  }
}
