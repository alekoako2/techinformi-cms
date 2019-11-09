import gql from 'graphql-tag';

export const countResearchProjectsQuery = gql`
    query CountResearchProjectsQuery{
        countResearchProjects
    }
`;

export const researchProjectQuery = gql`
    query ResearchProjectQuery($id:String!){
        researchProject(id:$id){
            id
            inpDate
            regDate
            startDate
            endDate
            regNumb
            research
            researchDirection
            researchExecutionBasis
            abstract
            annotation
            budget
            organizationName
            organizationShortName
            organizationCode
            organizationHead
            organizationCity
            organizationAddress
            organizationIndex
            organizationTel
            organizationWeb
            participatingInstitutionName
            participatingInstitutionCountryCity
            participatingInstitutionTel
            participatingInstitutionEmail
            participatingInstitutionWeb
            leaderName
            leaderPosition
            leaderAcademicDegree
            leaderTel
            leaderMobile
            leaderEmail
            researchExecutors
            financing
            note
            pincode
            translation{
                title
                key{
                    name
                }
            }
            oecds{
                code
            }
        }
    }
`;

export const researchProjectsQuery = gql`
    query ResearchProjectsQuery($languageCode:LanguageCode, $first:Int, $skip:Int, $query:ResearchProjectQueryInput){
        researchProjects(query:$query, first:$first, skip:$skip){
            id
            inpDate
            regDate
            startDate
            endDate
            regNumb
            research
            researchDirection
            researchExecutionBasis
            abstract
            annotation
            budget
            organizationName
            organizationShortName
            organizationCode
            organizationHead
            organizationCity
            organizationAddress
            organizationIndex
            organizationTel
            organizationWeb
            participatingInstitutionName
            participatingInstitutionCountryCity
            participatingInstitutionTel
            participatingInstitutionEmail
            participatingInstitutionWeb
            leaderName
            leaderPosition
            leaderAcademicDegree
            leaderTel
            leaderMobile
            leaderEmail
            researchExecutors
            financing
            note
            pincode
            translation(language:$languageCode){
                title
                key{
                    name
                }
            }
            oecds{
                code
            }
        }
    }`;
