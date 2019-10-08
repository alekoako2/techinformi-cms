import gql from 'graphql-tag';

export const countTechnologyTransferNetworksQuery = gql`
    query CountTechnologyTransferNetworksQuery{
        countTechnologyTransferNetworks
    }
`;

export const technologyTransferNetworkQuery = gql`
    query TechnologyTransferNetworkQuery($id:String!){
        technologyTransferNetwork(id:$id){
            id
            url
            title
            text
            region
        }
    }
`;

export const technologyTransferNetworksQuery = gql`
    query TechnologyTransferNetworksQuery($first:Int, $skip:Int, $query:String){
        technologyTransferNetworks(query:$query, first:$first, skip:$skip){
            id
            url
            title
            text
            region
        }
    }`;
