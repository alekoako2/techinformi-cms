import { Observable } from 'rxjs'
import { LanguageCode, Scalars } from '@graphql'

export interface CrudService<
  QueryInput,
  FetchAllQuery,
  FetchSingleQuery,
  CreateInput,
  CreateMutation,
  UpdateInput,
  UpdateMutation,
  DeleteMutation
> {
  fetchAll(
    query: QueryInput,
    pageIndex: number,
    pageSize: number
  ): Observable<FetchAllQuery>

  fetchSingle(id: Scalars['ID']): Observable<FetchSingleQuery>

  create(input: CreateInput): Observable<CreateMutation>

  update(input: UpdateInput): Observable<UpdateMutation>

  delete(id: Scalars['ID']): Observable<DeleteMutation>
}

export interface FetchAllQueryVariables<QueryInput> {
  languageCode: LanguageCode
  query: QueryInput
  first: number
  skip: number
  orderBy: string
}

export interface FetchSingleQueryVariables {
  languageCode: LanguageCode
  id: Scalars['ID']
}

export interface CreateMutationVariables<CreateInput> {
  languageCode: LanguageCode
  input: CreateInput
}

export interface UpdateMutationVariables<UpdateInput> {
  languageCode: LanguageCode
  input: UpdateInput
}

export interface DeleteMutationVariables {
  id: Scalars['ID']
}
