import gql from 'graphql-tag'

export const updateNewsMutation = gql`
  mutation UpdateNews($languageCode: LanguageCode, $input: NewsUpdateInput) {
    updateNews(input: $input) {
      id
      translation(language: $languageCode) {
        title
        description
        content
      }
    }
  }
`

export const createNewsMutation = gql`
  mutation CreateNews($languageCode: LanguageCode, $input: NewsCreateInput) {
    createNews(input: $input) {
      id
      translation(language: $languageCode) {
        title
        description
        content
      }
    }
  }
`

export const deleteNewsMutation = gql`
  mutation DeleteNews($id: ID) {
    deleteNews(id: $id) {
      id
    }
  }
`
