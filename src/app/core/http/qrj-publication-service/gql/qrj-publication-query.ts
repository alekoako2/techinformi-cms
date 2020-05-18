import gql from 'graphql-tag'

export const qrjPublicationsQuery = gql`
  query QrjPublications(
    $languageCode: LanguageCode
    $query: QrjPublicationQueryInput
    $first: Int
    $skip: Int
  ) {
    qrjPublications(query: $query, first: $first, skip: $skip) {
      id
      edited
      index
      translation(language: $languageCode) {
        title
        abstract
      }
    }
    countQrjPublications(query: $query)
  }
`
export const qrjPublicationQuery = gql`
  query QrjPublication($languageCode: LanguageCode, $id: String) {
    qrjPublication(id: $id) {
      index
      year
      number
      pages
      inputDate
      qrjJournal {
        code
        translation(language: $languageCode) {
          name
          address
        }
      }
      oecd {
        code
        translation(language: $languageCode) {
          name
        }
      }
      translation(language: $languageCode) {
        title
        publicationAuthor
        publicationLang
        abstract
      }
    }
  }
`
