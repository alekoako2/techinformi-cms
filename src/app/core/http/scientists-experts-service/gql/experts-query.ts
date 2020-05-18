import gql from 'graphql-tag'

export const expertsQuery = gql`
  query Experts(
    $languageCode: LanguageCode
    $query: expertQueryInput
    $first: Int
    $skip: Int
  ) {
    experts(query: $query, first: $first, skip: $skip) {
      id
      translation(language: $languageCode) {
        fullName
        specialization
      }
      inpDate
      oecds {
        translation(language: $languageCode) {
          name
        }
      }
    }
    countExperts(query: $query)
  }
`

export const expertQuery = gql`
  query Expert($languageCode: LanguageCode, $id: String) {
    expert(id: $id) {
      email
      publications
      workExperience
      languages {
        name
      }
      translation(language: $languageCode) {
        fullName
        qualification
        academicDegree
        specialization
        workingPlace
        position
      }
      oecds {
        translation(language: $languageCode) {
          name
        }
      }
    }
  }
`
