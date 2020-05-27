import gql from 'graphql-tag'

export const countNewsesQuery = gql`
  query CountNewsesQuery {
    countNewses
  }
`

export const newsQuery = gql`
  query NewsQuery($id: String!) {
    news(id: $id) {
      id
      translation {
        title
        description
        content
      }
    }
  }
`

export const newsesQuery = gql`
  query NewsesQuery(
    $languageCode: LanguageCode
    $first: Int
    $skip: Int
    $query: String
  ) {
    newses(query: $query, first: $first, skip: $skip) {
      id
      translation(language: $languageCode) {
        title
        description
        content
      }
    }
  }
`
