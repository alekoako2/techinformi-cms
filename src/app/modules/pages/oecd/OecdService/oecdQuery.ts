import gql from 'graphql-tag';

export const oecdsQuery = gql`
  query OecdsQuery($languageCode:LanguageCode){
    oecds{
      code
      translation(language: $languageCode){
        name
      }
    }
  }`;
