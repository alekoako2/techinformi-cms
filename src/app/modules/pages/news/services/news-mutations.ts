import gql from 'graphql-tag';

export const updateNewsMutation = gql`
    mutation UpdateNewsMutation(
        $id:ID!
        $translation:[NewsTranslationInput]
    ){
        updateNews(
            id:$id,
            input:{
                translation:$translation
            }
        ){
            id
            translation{
                title
                description
                content
            }
        }
    }`;

export const createNewsMutation = gql`
    mutation CreateNewsMutation(
        $translation:[NewsTranslationInput]
    ){
        createNews(
            input:{
                translation:$translation
            }
        ){
            id
            translation{
                title
                description
                content
            }
        }
    }`;

export const deleteNewsMutation = gql`
    mutation DeleteNewsMutation(
        $id:ID
    ){
        deleteNews(
            id:$id
        ){
            id
        }
    }
`;
