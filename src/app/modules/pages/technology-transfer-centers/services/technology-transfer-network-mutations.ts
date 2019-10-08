import gql from 'graphql-tag';

export const updateTechnologyTransferNetworkMutation = gql`
    mutation UpdateTechnologyTransferNetworkMutation(
        $id:ID!
        $url:String
        $title:String
        $text:String
        $region:String
    ){
        updateTechnologyTransferNetwork(
            id:$id,
            input:{
                url:$url
                title:$title
                text:$text
                region:$region
            }
        ){
            id
            url
            title
            text
            region
        }
    }`;

export const createTechnologyTransferNetworkMutation = gql`
    mutation CreateTechnologyTransferNetworkMutation(
        $url:String
        $title:String
        $text:String
        $region:String
    ){
        createTechnologyTransferNetwork(
            input:{
                url:$url
                title:$title
                text:$text
                region:$region
            }
        ){
            id
            url
            title
            text
            region
        }
    }`;

export const deleteTechnologyTransferNetworkMutation = gql`
    mutation DeleteTechnologyTransferNetworkMutation(
        $id:ID
    ){
        deleteTechnologyTransferNetwork(
            id:$id
        ){
            id
        }
    }
`;
