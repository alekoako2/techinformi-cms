// import gql from 'graphql-tag'
//
// export const employeesQuery = gql`
//   query EmployeesQuery($languageCode: LanguageCode) {
//     about-us-employees(query: $query, first: $first, skip: $skip) {
//       id
//       qrj-publications
//       year
//       number
//       pages
//       inputDate
//       journal {
//         code
//         translation(header-top-toolbar-user-tools-language: $languageCode) {
//           name
//         }
//       }
//       oecd {
//         code
//         translation(header-top-toolbar-user-tools-language: $languageCode) {
//           name
//         }
//       }
//       translation(header-top-toolbar-user-tools-language: $languageCode) {
//         title
//         publicationAuthor
//         publicationLang
//         abstract
//       }
//     }
//   }
// `
