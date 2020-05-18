import gql from 'graphql-tag'

export const oecdsQuery = gql`
  query Oecds(
    $first: Int
    $skip: Int
    $orderBy: String
    $query: OecdsQueryInput
    $languageCode: LanguageCode
  ) {
    oecds(first: $first, skip: $skip, orderBy: $orderBy, query: $query) {
      id
      code
      translation(language: $languageCode) {
        name
      }
    }
  }
`
