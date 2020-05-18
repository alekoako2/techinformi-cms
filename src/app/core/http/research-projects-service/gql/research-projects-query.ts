import gql from 'graphql-tag'

export const researchProjectsQuery = gql`
  query ResearchProjects(
    $languageCode: LanguageCode
    $first: Int
    $skip: Int
    $query: ResearchProjectQueryInput
  ) {
    researchProjects(query: $query, first: $first, skip: $skip) {
      id
      leaderName
      researchExecutors
      organizationName
      endDate
      translation(language: $languageCode) {
        title
        key {
          name
        }
      }
    }

    countResearchProjects(query: $query)
  }
`

export const researchProjectQuery = gql`
  query ResearchProject($languageCode: LanguageCode, $id: String) {
    researchProject(id: $id) {
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
      translation(language: $languageCode) {
        title
        key {
          name
        }
      }
      oecds {
        code
        translation(language: $languageCode) {
          name
        }
      }
    }
  }
`
