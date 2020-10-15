import gql from 'graphql-tag'

export const updateQrjJournalMutation = gql`
  mutation UpdateQrjJournal(
    $languageCode: LanguageCode
    $input: QrjJournalUpdateInput
  ) {
    updateQrjJournal(input: $input) {
      id
      code
      translation(language: $languageCode) {
        name
        address
      }
    }
  }
`

export const createQrjJournalMutation = gql`
  mutation CreateQrjJournal(
    $languageCode: LanguageCode
    $input: QrjJournalCreateInput
  ) {
    createQrjJournal(input: $input) {
      id
      code
      translation(language: $languageCode) {
        name
        address
      }
    }
  }
`

export const deleteQrjJournalMutation = gql`
  mutation DeleteQrjJournal($id: ID) {
    deleteQrjJournal(id: $id) {
      id
    }
  }
`
