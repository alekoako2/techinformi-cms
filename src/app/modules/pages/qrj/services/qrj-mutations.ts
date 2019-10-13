import gql from 'graphql-tag';

export const updateQrjMutation = gql`
    mutation UpdateQrjMutation(
        $id:ID!
        $year:String
        $pub_num1:String
        $pub_num1_address_ka:String
        $pub_num1_address_en:String
        $pub_num2:String
        $pub_num2_address_ka:String
        $pub_num2_address_en:String
    ){
        updateQrj(
            id:$id,
            input:{
                year:$year
                journal:[
                    {
                        pub_num:$pub_num1,
                        translation:[
                            {
                                address:$pub_num1_address_ka
                                language:KA
                            },
                            {
                                address:$pub_num1_address_en
                                language:EN
                            }
                        ]
                    },
                    {
                        pub_num:$pub_num2,
                        translation:[
                            {
                                address:$pub_num2_address_ka
                                language:KA
                            },
                            {
                                address:$pub_num2_address_en
                                language:EN
                            }
                        ]
                    }
                ]
            }
        ){
            id
            year
            journal{
                pubNumber
                translation{
                    address
                }
            }
        }
    }`;

export const createQrjMutation = gql`
    mutation CreateQrjMutation(
        $year:String
        $journal:[JournalInput]
    ){
        createQrj(
            input:{
                year:$year
                journal:$journal
            }
        ){
            id
            year
            journal{
                pubNumber
                translation{
                    address
                }
            }
        }
    }`;

export const deleteQrjMutation = gql`
    mutation DeleteQrjMutation(
        $id:ID
    ){
        deleteQrj(
            id:$id
        ){
            id
        }
    }
`;
