import gql from 'graphql-tag';

export const updateTechnologyTransferAndInnovationOrganizationMutation = gql`
    mutation UpdateTechnologyTransferAndInnovationOrganizationMutation(
        $id:ID!
        $url:String
        $title:String
        $text:String
        $region:String
    ){
        updateTechnologyTransferAndInnovationOrganization(
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

export const createTechnologyTransferAndInnovationOrganizationMutation = gql`
    mutation CreateTechnologyTransferAndInnovationOrganizationMutation(
        $url:String
        $title:String
        $text:String
        $region:String
    ){
        createTechnologyTransferAndInnovationOrganization(
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

export const deleteTechnologyTransferAndInnovationOrganizationMutation = gql`
    mutation DeleteTechnologyTransferAndInnovationOrganizationMutation(
        $id:ID
    ){
        deleteTechnologyTransferAndInnovationOrganization(
            id:$id
        ){
            id
        }
    }
`;
