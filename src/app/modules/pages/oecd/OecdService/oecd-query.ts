import gql from 'graphql-tag';

export const countOecdsQuery = gql`
    query CountOecdsQuery{
        countOecds
    }
`;

export const oecdQuery = gql`
    query OecdQuery($id:String!){
        oecd(id:$id){
            id
            code
            translation{
                name
            }
        }
    }
`;

export const oecdsQuery = gql`
    query OecdsQuery($languageCode:LanguageCode, $first:Int, $skip:Int, $query:String){
        oecds(query:$query, first:$first, skip:$skip){
            id
            code
            translation(language: $languageCode){
                name
            }
        }
    }`;
