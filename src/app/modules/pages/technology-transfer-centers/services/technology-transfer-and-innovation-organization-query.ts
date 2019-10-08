import gql from 'graphql-tag';

export const countTechnologyTransferAndInnovationOrganizationsQuery = gql`
    query CountTechnologyTransferAndInnovationOrganizationsQuery{
        countTechnologyTransferAndInnovationOrganizations
    }
`;

export const technologyTransferAndInnovationOrganizationQuery = gql`
    query TechnologyTransferAndInnovationOrganizationQuery($id:String!){
        technologyTransferAndInnovationOrganization(id:$id){
            id
            url
            title
            text
            region
        }
    }
`;

export const technologyTransferAndInnovationOrganizationsQuery = gql`
    query TechnologyTransferAndInnovationOrganizationsQuery($first:Int, $skip:Int, $query:String){
        technologyTransferAndInnovationOrganizations(query:$query, first:$first, skip:$skip){
            id
            url
            title
            text
            region
        }
    }`;
