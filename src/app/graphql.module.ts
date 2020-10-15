import { NgModule } from '@angular/core'
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular'
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpClientModule, HttpHeaders } from '@angular/common/http'
import { ApolloLink } from 'apollo-link'
import { environment } from '@env'

const uri = environment.graphqlLink

export function createApollo(httpLink: HttpLink) {
  let link: ApolloLink = httpLink.create({ uri })

  if (localStorage.getItem('JWT_TOKEN')) {
    const middleware = new ApolloLink((operation, forward) => {
      operation.setContext({
        headers: new HttpHeaders().set(
          'Authorization',
          localStorage.getItem('JWT_TOKEN') || null
        ),
      })

      return forward(operation)
    })

    link = middleware.concat(link)
  }

  const cache = new InMemoryCache()

  return { link, cache }
}

@NgModule({
  exports: [HttpClientModule, ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
