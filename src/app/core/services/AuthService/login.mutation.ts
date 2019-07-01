import gql from 'graphql-tag';

export const loginMutation = gql`
  mutation login($languageCode:LanguageCode!, $email: String!, $password: String!){
    login(input:{
      email:$email
      password:$password
    }
    ){
      user{
        email
        role
        translation(language:$languageCode){
          firstName
          lastName
        }
      }
      token
    }
  }
`;
