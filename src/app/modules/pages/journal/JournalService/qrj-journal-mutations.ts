import gql from 'graphql-tag';

export const updateQrjJournalMutation = gql`
    mutation UpdateQrjJournalMutation(
        $id:ID!
        $code:String
        $name:String
        $address:String
        $nameEng:String
        $addressEng:String
    ){
        updateQrjJournal(
            id:$id,
            input:{
                code:$code
                translation:[
                    {
                        name:$name
                        address:$address
                        language:KA
                    },
                    {
                        name:$nameEng
                        address:$addressEng
                        language:EN
                    }
                ]
            }
        ){
            id
            code
            translation{
                name
                address
            }
        }
    }`;

export const createQrjJournalMutation = gql`
    mutation CreateQrjJournalMutation(
        $code:String
        $name:String
        $address:String
        $nameEng:String
        $addressEng:String
    ){
        createQrjJournal(
            input:{
                code:$code
                translation:[
                    {
                        name:$name
                        address:$address
                        language:KA
                    },
                    {
                        name:$nameEng
                        address:$addressEng
                        language:EN
                    }
                ]
            }
        ){
            id
            code
            translation{
                name
                address
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
