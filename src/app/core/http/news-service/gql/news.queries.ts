import gql from 'graphql-tag'

export const newsesQueries = gql`
  query Newses(
    $languageCode: LanguageCode
    $query: NewsQueryInput
    $first: Int
    $skip: Int
    $orderBy: String
  ) {
    newses(query: $query, first: $first, skip: $skip, orderBy: $orderBy) {
      id
      translation(language: $languageCode) {
        title
        description
        content
      }
    }
    countNewses(query: $query)
  }
`

export const newsQuery = gql`
  query News($id: ID) {
    news(id: $id) {
      translation {
        id
        title
        description
        content
      }
    }
  }
`
