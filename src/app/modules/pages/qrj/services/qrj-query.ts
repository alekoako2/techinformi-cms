import gql from 'graphql-tag';

export const countQrjsQuery = gql`
    query CountQrjsQuery{
        countQrjs
    }
`;

export const qrjQuery = gql`
    query QrjQuery($id:String!){
        qrj(id:$id){
            id
            year
            journal{
                pubNumber
                translation{
                    address
                }
            }
        }
    }
`;

export const qrjsQuery = gql`
    query QrjsQuery($languageCode:LanguageCode, $first:Int, $skip:Int, $query:String){
        qrjs(query:$query, first:$first, skip:$skip){
            id
            year
            journal{
                pubNumber
                translation(language:$languageCode){
                    address
                }
            }
        }
    }`;
