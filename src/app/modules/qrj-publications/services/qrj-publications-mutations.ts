import gql from 'graphql-tag'

export const updateQrjPublicationMutation = gql`
  mutation UpdateQrjPublicationMutation(
    $id: ID!
    $index: String
    $year: String
    $number: String
    $pages: String
    $oecd: String
    $journal: String
    $title: String
    $publicationAuthor: String
    $publicationLang: String
    $abstract: String
    $titleEng: String
    $publicationAuthorEng: String
    $publicationLangEng: String
    $abstractEng: String
  ) {
    updateQrjPublication(
      id: $id
      input: {
        index: $index
        year: $year
        number: $number
        pages: $pages
        oecd: $oecd
        journal: $journal
        translation: [
          {
            title: $title
            publicationAuthor: $publicationAuthor
            publicationLang: $publicationLang
            abstract: $abstract
            language: KA
          }
          {
            title: $titleEng
            publicationAuthor: $publicationAuthorEng
            publicationLang: $publicationLangEng
            abstract: $abstractEng
            language: EN
          }
        ]
      }
    ) {
      id
      index
      edited
      year
      number
      pages
      inputDate
      journal {
        code
        translation {
          name
        }
      }
      oecd {
        code
        translation {
          name
        }
      }
      translation {
        title
        publicationAuthor
        publicationLang
        abstract
      }
    }
  }
`

export const createQrjPublicationMutation = gql`
  mutation CreateQrjPublicationMutation(
    $index: String
    $year: String
    $number: String
    $pages: String
    $oecd: String
    $journal: String
    $title: String
    $publicationAuthor: String
    $publicationLang: String
    $abstract: String
    $titleEng: String
    $publicationAuthorEng: String
    $publicationLangEng: String
    $abstractEng: String
  ) {
    createQrjPublication(
      input: {
        index: $index
        year: $year
        number: $number
        pages: $pages
        oecd: $oecd
        journal: $journal
        translation: [
          {
            title: $title
            publicationAuthor: $publicationAuthor
            publicationLang: $publicationLang
            abstract: $abstract
            language: KA
          }
          {
            title: $titleEng
            publicationAuthor: $publicationAuthorEng
            publicationLang: $publicationLangEng
            abstract: $abstractEng
            language: EN
          }
        ]
      }
    ) {
      id
      index
      edited
      year
      number
      pages
      inputDate
      journal {
        code
        translation {
          name
        }
      }
      oecd {
        code
        translation {
          name
        }
      }
      translation {
        title
        publicationAuthor
        publicationLang
        abstract
      }
    }
  }
`

export const deleteQrjPublicationMutation = gql`
  mutation DeleteQrjPublicationMutation($id: ID) {
    deleteQrjPublication(id: $id) {
      index
    }
  }
`
