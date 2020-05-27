import gql from 'graphql-tag'

export const updateQrjPublicationMutation = gql`
  mutation UpdateQrjPublication(
    $languageCode: LanguageCode
    $input: QrjPublicationUpdateInput
  ) {
    updateQrjPublication(input: $input) {
      id
      edited
      index
      translation(language: $languageCode) {
        title
        abstract
      }
    }
  }
`

export const createQrjPublicationMutation = gql`
  mutation CreateQrjPublication(
    $languageCode: LanguageCode
    $input: QrjPublicationCreateInput
  ) {
    createQrjPublication(input: $input) {
      id
      edited
      index
      translation(language: $languageCode) {
        title
        abstract
      }
    }
  }
`

export const deleteQrjPublicationMutation = gql`
  mutation DeleteQrjPublication($id: ID) {
    deleteQrjPublication(id: $id) {
      index
    }
  }
`
