import gql from 'graphql-tag'

export const signInMutation = gql`
  mutation signIn(
    $languageCode: LanguageCode!
    $email: String!
    $password: String!
  ) {
    signIn(input: { email: $email, password: $password }) {
      user {
        email
        role
        translation(language: $languageCode) {
          firstName
          lastName
        }
      }
      token
    }
  }
`
