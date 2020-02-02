import gql from 'graphql-tag';

export const countExpertsQuery = gql`
  query CountExpertsQuery{
    countExperts
  }
`;

export const expertQuery = gql`
  query ExpertQuery($id:String!){
    expert(id:$id){
      id
      inpDate
      workExperience
      email
      web
      tel
      mobile
      publications
      translation{
        fullName
        qualification
        academicDegree
        specialization
        workingPlace
        position
      }
      oecds{
        code
      }
      languages{
        code
      }
    }
  }
`;

export const expertsQuery = gql`
  query ExpertsQuery($languageCode:LanguageCode, $first:Int, $skip:Int, $query:expertQueryInput){
    experts(query:$query, first:$first, skip:$skip){
      id
      workExperience
      inpDate
      email
      web
      tel
      mobile
      publications
      translation(language:$languageCode){
        fullName
        qualification
        academicDegree
        specialization
        workingPlace
        position
      }
      oecds{
        code
      }
      languages{
        code
      }
    }
  }`;
