import gql from 'graphql-tag';

export const countQrjPublicationsQuery = gql`
  query CountQrjPublicationsQuery{
    countQrjPublications
  }
`;

export const qrjPublicationQuery = gql`
  query QrjPublicationQuery($id:String!){
    qrjPublication(id:$id){
      id
      index
      year
      number
      pages
      inputDate
      journal{
        code
        translation{
          name
        }
      }
      oecd{
        code
        translation{
          name
        }
      }
      translation{
        title
        publicationAuthor
        publicationLang
        abstract
      }
    }
  }
`;

export const qrjPublicationsQuery = gql`
  query QrjPublicationsQuery($languageCode:LanguageCode, $first:Int, $skip:Int, $query:String){
    qrjPublications(query:$query, first:$first, skip:$skip){
      id
      index
      year
      number
      pages
      inputDate
      journal{
        code
        translation(language:$languageCode){
          name
        }
      }
      oecd{
        code
        translation(language:$languageCode){
          name
        }
      }
      translation(language:$languageCode){
        title
        publicationAuthor
        publicationLang
        abstract
      }
    }
  }`;
