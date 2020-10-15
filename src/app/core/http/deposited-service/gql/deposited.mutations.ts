import gql from 'graphql-tag'

export const updateDepositedMutation = gql`
  mutation UpdateDeposited(
    $languageCode: LanguageCode
    $input: DepositedUpdateInput
  ) {
    updateDeposited(input: $input) {
      id
      index
      translation(language: $languageCode) {
        title
        resume
      }
    }
  }
`

export const createDepositedMutation = gql`
  mutation CreateDeposited(
    $languageCode: LanguageCode
    $input: DepositedCreateInput
  ) {
    createDeposited(input: $input) {
      id
      index
      translation(language: $languageCode) {
        title
        resume
      }
    }
  }
`

export const deleteDepositedMutation = gql`
  mutation DeleteDeposited($id: ID) {
    deleteDeposited(id: $id) {
      index
    }
  }
`
