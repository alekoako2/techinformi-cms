import gql from 'graphql-tag';

export const countQrjJournalsQuery = gql`
    query CountQrjJournalsQuery{
        countQrjJournals
    }
`;

export const qrjJournalQuery = gql`
    query QrjJournalQuery($id:String!){
        qrjJournal(id:$id){
            id
            code
            translation{
                name
                address
            }
        }
    }
`;

export const qrjJournalsQuery = gql`
    query QrjJournalsQuery($languageCode:LanguageCode, $first:Int, $skip:Int, $query:String){
        qrjJournals(query:$query, first:$first, skip:$skip){
            id
            code
            translation(language: $languageCode){
                name
                address
            }
        }
    }`;
