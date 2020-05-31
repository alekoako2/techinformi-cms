import { Injectable } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { newsQuery, newsesQueries } from './gql/news.queries'
import { Observable } from 'rxjs'
import {
  CreateNewsMutation,
  DeleteNewsMutation,
  NewsCreateInput,
  NewsQuery,
  NewsQueryInput,
  NewsesQuery,
  NewsUpdateInput,
  Scalars,
  UpdateNewsMutation,
} from '@graphql'
import { LanguageService } from '@services/language-service'
import {
  createNewsMutation,
  deleteNewsMutation,
  updateNewsMutation,
} from './gql/news.mutations'
import { CrudService } from '@shared/modules/crud/interfaces/crud.service.interfaces'
import {
  crudFetchAll,
  crudFetchSingle,
  crudCreate,
  crudDelete,
  crudUpdate,
} from '@shared/modules/crud/utils/crud.utils'

@Injectable({
  providedIn: 'root',
})
export class NewsService
  implements
    CrudService<
      NewsQueryInput,
      NewsesQuery,
      NewsQuery,
      NewsCreateInput,
      CreateNewsMutation,
      NewsUpdateInput,
      UpdateNewsMutation,
      DeleteNewsMutation
    > {
  constructor(
    private apollo: Apollo,
    private languageService: LanguageService
  ) {}

  fetchAll = (
    query: NewsQueryInput,
    pageIndex: 0,
    pageSize: 10
  ): Observable<NewsesQuery> => {
    return crudFetchAll<NewsQueryInput, NewsesQuery>(
      this.apollo,
      this.languageService.currentLanguage,
      newsesQueries,
      query,
      pageIndex,
      pageSize
    )
  }

  fetchSingle = (id: Scalars['ID']): Observable<NewsQuery> => {
    return crudFetchSingle<NewsQuery>(
      this.apollo,
      this.languageService.currentLanguage,
      newsQuery,
      id
    )
  }

  create = (input: NewsCreateInput): Observable<CreateNewsMutation> => {
    return crudCreate<NewsCreateInput, CreateNewsMutation>(
      this.apollo,
      this.languageService.currentLanguage,
      createNewsMutation,
      input
    )
  }

  update = (input: NewsUpdateInput): Observable<UpdateNewsMutation> => {
    return crudUpdate<NewsUpdateInput, UpdateNewsMutation>(
      this.apollo,
      this.languageService.currentLanguage,
      updateNewsMutation,
      input
    )
  }

  delete = (id: Scalars['ID']): Observable<DeleteNewsMutation> => {
    return crudDelete<DeleteNewsMutation>(this.apollo, deleteNewsMutation, id)
  }
}
