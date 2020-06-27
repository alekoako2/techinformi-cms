import gql from 'graphql-tag'

export const qrjJournalsQuery = gql`
  query QrjJournals(
    $languageCode: LanguageCode
    $query: QrjJournalQueryInput
    $first: Int
    $skip: Int
    $orderBy: String
  ) {
    qrjJournals(query: $query, first: $first, skip: $skip, orderBy: $orderBy) {
      id
      code
      translation(language: $languageCode) {
        id
        name
        address
      }
    }
    countQrjJournals(query: $query)
  }
`

export const qrjJournalQuery = gql`
  query QrjJournal($id: ID) {
    qrjJournal(id: $id) {
      id
      code
      translation {
        id
        name
        address
      }
    }
  }
`
