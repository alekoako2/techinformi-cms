import { Injectable } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { map } from 'rxjs/operators'
import { expertQuery, expertsQuery } from './gql/experts-query'
import {
  Expert,
  ExpertQuery,
  ExpertQueryInput,
  ExpertQueryVariables,
  ExpertsQuery,
  ExpertsQueryVariables,
  Scalars,
} from '@graphql'
import { Observable } from 'rxjs'
import { ApolloQueryResult } from 'apollo-client'
import { LanguageService } from '@services/language-service'

@Injectable({
  providedIn: 'root',
})
export class ExpertsService {
  constructor(
    private apollo: Apollo,
    private languageService: LanguageService
  ) {}

  loadExperts = (
    query: ExpertQueryInput,
    index = 0,
    limit = 12
  ): Observable<ExpertsQuery> =>
    this.apollo
      .watchQuery<ExpertsQuery, ExpertsQueryVariables>({
        variables: {
          languageCode: this.languageService.currentLanguage,
          first: limit,
          skip: index * limit,
          query,
        },
        query: expertsQuery,
      })
      .valueChanges.pipe(
        map((expertsData: ApolloQueryResult<ExpertsQuery>) => expertsData.data)
      )

  loadExpert = (id: Scalars['ID']): Observable<Expert> =>
    this.apollo
      .watchQuery<ExpertQuery, ExpertQueryVariables>({
        variables: {
          languageCode: this.languageService.currentLanguage,
          id,
        },
        query: expertQuery,
      })
      .valueChanges.pipe(
        map((res: ApolloQueryResult<ExpertQuery>) => res.data.expert)
      )
}
