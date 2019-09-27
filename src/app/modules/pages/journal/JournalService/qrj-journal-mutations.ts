import gql from 'graphql-tag';

export const updateQrjJournalMutation = gql`
    mutation UpdateQrjJournalMutation(
        $id:ID!
        $code:String
        $name:String
        $nameEng:String
    ){
        updateQrjJournal(
            id:$id,
            input:{
                code:$code
                translation:[
                    {
                        name:$name
                        language:KA
                    },
                    {
                        name:$nameEng
                        language:EN
                    }
                ]
            }
        ){
            id
            code
            translation{
                name
            }
        }
    }`;

export const createQrjJournalMutation = gql`
    mutation CreateQrjJournalMutation(
        $code:String
        $name:String
        $nameEng:String
    ){
        createQrjJournal(
            input:{
                code:$code
                translation:[
                    {
                        name:$name
                        language:KA
                    },
                    {
                        name:$nameEng
                        language:EN
                    }
                ]
            }
        ){
            id
            code
            translation{
                name
            }
        }
    }`;

export const deleteQrjJournalMutation = gql`
    mutation DeleteQrjJournalMutation(
        $id:ID
    ){
        deleteQrjJournal(
            id:$id
        ){
            code
        }
    }
`;
