import gql from 'graphql-tag';

export const updateOecdMutation = gql`
    mutation UpdateOecdMutation(
        $id:ID!
        $code:String
        $name:String
        $nameEng:String
    ){
        updateOecd(
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

export const createOecdMutation = gql`
    mutation CreateOecdMutation(
        $code:String
        $name:String
        $nameEng:String
    ){
        createOecd(
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

export const deleteOecdMutation = gql`
    mutation DeleteOecdMutation(
        $id:ID
    ){
        deleteOecd(
            id:$id
        ){
            code
        }
    }
`;
