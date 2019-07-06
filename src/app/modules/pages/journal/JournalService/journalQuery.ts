import gql from 'graphql-tag';

export const journalsQuery = gql`
  query QrjJournalsQuery($languageCode:LanguageCode){
    qrjJournals{
      code
      translation(language: $languageCode){
        name
        address
      }
    }
  }`;
