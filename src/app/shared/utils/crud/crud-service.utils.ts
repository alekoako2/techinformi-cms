import { Apollo } from 'apollo-angular'
import { CreateQrjPublicationMutation, LanguageCode, Scalars } from '@graphql'
import { DocumentNode } from 'graphql'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { ApolloQueryResult } from 'apollo-client'
import {
  createQrjPublicationMutation,
  deleteQrjPublicationMutation,
} from '@http/qrj-publication-service/gql/qrj-publication.mutations'
import {
  CreateMutationVariables,
  DeleteMutationVariables,
  FetchAllQueryVariables,
  FetchSingleQueryVariables,
  UpdateMutationVariables,
} from '@interfaces/crud/crud-service.interfaces'

export const crudFetchAll = <QueryInput, Query>(
  apollo: Apollo,
  languageCode: LanguageCode,
  graphqlQuery: DocumentNode,
  query: QueryInput,
  skip = 0,
  first = 10
): Observable<Query> => {
  return apollo
    .watchQuery<Query, FetchAllQueryVariables<QueryInput>>({
      variables: {
        languageCode,
        query,
        first,
        skip: first * skip,
        orderBy: 'updatedAt_DESC',
      },
      query: graphqlQuery,
      fetchPolicy: 'network-only',
    })
    .valueChanges.pipe(
      map((res: ApolloQueryResult<Query>) => {
        console.log(res)
        return res.data
      })
    )
}

export const crudFetchSingle = <Query>(
  apollo: Apollo,
  languageCode: LanguageCode,
  graphqlQuery: DocumentNode,
  id: Scalars['ID']
): Observable<Query> => {
  return apollo
    .watchQuery<Query, FetchSingleQueryVariables>({
      variables: {
        languageCode,
        id,
      },
      fetchPolicy: 'network-only',
      query: graphqlQuery,
    })
    .valueChanges.pipe(map((res: ApolloQueryResult<Query>) => res.data))
}

export const crudCreate = <CreateInput, Mutation>(
  apollo: Apollo,
  languageCode: LanguageCode,
  graphqlMutation: DocumentNode,
  input: CreateInput
): Observable<Mutation> => {
  return apollo
    .mutate<CreateQrjPublicationMutation, CreateMutationVariables<CreateInput>>(
      {
        variables: {
          languageCode,
          input,
        },
        mutation: createQrjPublicationMutation,
      }
    )
    .pipe(
      map(
        (apolloQueryResult: ApolloQueryResult<Mutation>) =>
          apolloQueryResult.data
      )
    )
}

export const crudUpdate = <UpdateInput, Mutation>(
  apollo: Apollo,
  languageCode: LanguageCode,
  graphqlMutation: DocumentNode,
  input: UpdateInput
): Observable<Mutation> => {
  return apollo
    .mutate<Mutation, UpdateMutationVariables<UpdateInput>>({
      variables: {
        languageCode,
        input,
      },
      mutation: graphqlMutation,
    })
    .pipe(
      map(
        (apolloQueryResult: ApolloQueryResult<Mutation>) =>
          apolloQueryResult.data
      )
    )
}

export const crudDelete = <Mutation>(
  apollo: Apollo,
  graphqlMutation: DocumentNode,
  id: Scalars['ID']
): Observable<Mutation> => {
  return apollo
    .mutate<Mutation, DeleteMutationVariables>({
      variables: {
        id,
      },
      mutation: deleteQrjPublicationMutation,
    })
    .pipe(
      map(
        (apolloQueryResult: ApolloQueryResult<Mutation>) =>
          apolloQueryResult.data
      )
    )
}
