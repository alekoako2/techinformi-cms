import gql from 'graphql-tag'

export const depositedsQueries = gql`
  query Depositeds(
    $languageCode: LanguageCode
    $query: DepositedQueryInput
    $first: Int
    $skip: Int
    $orderBy: String
  ) {
    depositeds(query: $query, first: $first, skip: $skip, orderBy: $orderBy) {
      id
      index
      translation(language: $languageCode) {
        title
        resume
      }
    }
    countDepositeds(query: $query)
  }
`

export const depositedQuery = gql`
  query Deposited($languageCode: LanguageCode, $id: ID) {
    deposited(id: $id) {
      index
      year
      uak
      oecd {
        code
        translation(language: $languageCode) {
          name
        }
      }
      translation {
        id
        title
        author
        institute
        resume
      }
    }
  }
`
