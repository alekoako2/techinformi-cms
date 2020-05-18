import gql from 'graphql-tag'

export const updateQrjPublicationMutation = gql`
  mutation UpdateQrjPublicationMutation($input: QrjPublicationUpdateInput) {
    updateQrjPublication(input: $input) {
      id
      index
      edited
      year
      number
      pages
      inputDate
      qrjJournal {
        code
        translation {
          name
        }
      }
      oecd {
        code
        translation {
          name
        }
      }
      translation {
        title
        publicationAuthor
        publicationLang
        abstract
      }
    }
  }
`

export const createQrjPublicationMutation = gql`
  mutation CreateQrjPublicationMutation($input: QrjPublicationCreateInput) {
    createQrjPublication(input: $input) {
      id
      index
      edited
      year
      number
      pages
      inputDate
      qrjJournal {
        code
        translation {
          name
        }
      }
      oecd {
        code
        translation {
          name
        }
      }
      translation {
        title
        publicationAuthor
        publicationLang
        abstract
      }
    }
  }
`

export const deleteQrjPublicationMutation = gql`
  mutation DeleteQrjPublicationMutation($id: ID) {
    deleteQrjPublication(id: $id) {
      index
    }
  }
`
