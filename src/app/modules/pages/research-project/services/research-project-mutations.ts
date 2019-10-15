import gql from 'graphql-tag';

export const updateResearchProjectMutation = gql`
    mutation UpdateResearchProjectMutation(
        $id:ID!
        $inpDate: String
        $regDate: String
        $startDate: String
        $endDate: String
        $regNumb: String
        $research: String
        $researchDirection: String
        $researchExecutionBasis: String
        $abstract: String
        $annotation: String
        $budget: Int
        $organizationName: String
        $organizationShortName: String
        $organizationCode: String
        $organizationHead: String
        $organizationCity: String
        $organizationAddress: String
        $organizationIndex: String
        $organizationTel: String
        $organizationWeb: String
        $participatingInstitutionName: String
        $participatingInstitutionCountryCity: String
        $participatingInstitutionTel: String
        $participatingInstitutionEmail: String
        $participatingInstitutionWeb: String
        $leaderName: String
        $leaderPosition: String
        $leaderAcademicDegree: String
        $leaderTel: String
        $leaderMobile: String
        $leaderEmail: String
        $researchExecutors: String
        $financing: String
        $note: String
        $pincode: String
        $translation:[ResearchProjectTranslationInput]
        $oecds:[OecdInput]
    ){
        updateResearchProject(
            id:$id,
            input:{
                inpDate:$inpDate
                regDate:$regDate
                startDate:$startDate
                endDate:$endDate
                regNumb:$regNumb
                research:$research
                researchDirection:$researchDirection
                researchExecutionBasis:$researchExecutionBasis
                abstract:$abstract
                annotation:$annotation
                budget:$budget
                organizationName:$organizationName
                organizationShortName:$organizationShortName
                organizationCode:$organizationCode
                organizationHead:$organizationHead
                organizationCity:$organizationCity
                organizationAddress:$organizationAddress
                organizationIndex:$organizationIndex
                organizationTel:$organizationTel
                organizationWeb:$organizationWeb
                participatingInstitutionName:$participatingInstitutionName
                participatingInstitutionCountryCity:$participatingInstitutionCountryCity
                participatingInstitutionTel:$participatingInstitutionTel
                participatingInstitutionEmail:$participatingInstitutionEmail
                participatingInstitutionWeb:$participatingInstitutionWeb
                leaderName:$leaderName
                leaderPosition:$leaderPosition
                leaderAcademicDegree:$leaderAcademicDegree
                leaderTel:$leaderTel
                leaderMobile:$leaderMobile
                leaderEmail:$leaderEmail
                researchExecutors:$researchExecutors
                financing:$financing
                note:$note
                pincode:$pincode
                translation:$translation
                oecds:$oecds
            }
        ){
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
                key
            }
            oecds{
                code
            }
        }
    }`;

export const createResearchProjectMutation = gql`
    mutation CreateResearchProjectMutation(
        $inpDate: String
        $regDate: String
        $startDate: String
        $endDate: String
        $regNumb: String
        $research: String
        $researchDirection: String
        $researchExecutionBasis: String
        $abstract: String
        $annotation: String
        $budget: Int
        $organizationName: String
        $organizationShortName: String
        $organizationCode: String
        $organizationHead: String
        $organizationCity: String
        $organizationAddress: String
        $organizationIndex: String
        $organizationTel: String
        $organizationWeb: String
        $participatingInstitutionName: String
        $participatingInstitutionCountryCity: String
        $participatingInstitutionTel: String
        $participatingInstitutionEmail: String
        $participatingInstitutionWeb: String
        $leaderName: String
        $leaderPosition: String
        $leaderAcademicDegree: String
        $leaderTel: String
        $leaderMobile: String
        $leaderEmail: String
        $researchExecutors: String
        $financing: String
        $note: String
        $pincode: String
        $translation:[ResearchProjectTranslationInput]
        $oecds:[OecdInput]
    ){
        createResearchProject(
            input:{
                inpDate:$inpDate
                regDate:$regDate
                startDate:$startDate
                endDate:$endDate
                regNumb:$regNumb
                research:$research
                researchDirection:$researchDirection
                researchExecutionBasis:$researchExecutionBasis
                abstract:$abstract
                annotation:$annotation
                budget:$budget
                organizationName:$organizationName
                organizationShortName:$organizationShortName
                organizationCode:$organizationCode
                organizationHead:$organizationHead
                organizationCity:$organizationCity
                organizationAddress:$organizationAddress
                organizationIndex:$organizationIndex
                organizationTel:$organizationTel
                organizationWeb:$organizationWeb
                participatingInstitutionName:$participatingInstitutionName
                participatingInstitutionCountryCity:$participatingInstitutionCountryCity
                participatingInstitutionTel:$participatingInstitutionTel
                participatingInstitutionEmail:$participatingInstitutionEmail
                participatingInstitutionWeb:$participatingInstitutionWeb
                leaderName:$leaderName
                leaderPosition:$leaderPosition
                leaderAcademicDegree:$leaderAcademicDegree
                leaderTel:$leaderTel
                leaderMobile:$leaderMobile
                leaderEmail:$leaderEmail
                researchExecutors:$researchExecutors
                financing:$financing
                note:$note
                pincode:$pincode
                translation:$translation
                oecds:$oecds
            }
        ){
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
                key
            }
            oecds{
                code
            }
        }
    }`;

export const deleteResearchProjectMutation = gql`
    mutation DeleteResearchProjectMutation(
        $id:ID
    ){
        deleteResearchProject(
            id:$id
        ){
            id
        }
    }
`;
