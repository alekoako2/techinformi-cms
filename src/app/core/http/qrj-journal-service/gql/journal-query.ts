import gql from 'graphql-tag'

export const qrjJournalsQuery = gql`
  query QrjJournals(
    $first: Int
    $skip: Int
    $orderBy: String
    $query: QrjJournalsQueryInput
    $languageCode: LanguageCode
  ) {
    qrjJournals(first: $first, skip: $skip, orderBy: $orderBy, query: $query) {
      id
      code
      translation(language: $languageCode) {
        name
        address
      }
    }
  }
`
