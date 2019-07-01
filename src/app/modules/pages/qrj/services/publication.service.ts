import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {loginMutation} from '../../../../core/services/AuthService/login.mutation';
import gql from 'graphql-tag';


export interface IQrj {
  qrjs: any;
}

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private apollo: Apollo, @Inject(LOCALE_ID) public localeId: string,) {
  }

  // getPublications() {
  //   return this.apollo
  //   .watchQuery({
  //     variables: {
  //       languageCode: this.localeId.toUpperCase()
  //     },
  //     query: gql`
  //       query ($languageCode:LanguageCode){
  //         qrjs(first:10){
  //           id
  //           index
  //           year
  //           number
  //           pages
  //           inputDate
  //           journal{
  //             code
  //             translation(language:$languageCode){
  //               name
  //             }
  //           }
  //           oecd{
  //             code
  //             translation(language:$languageCode){
  //               name
  //             }
  //           }
  //           translation(language:$languageCode){
  //             title
  //             publicationAuthor
  //             publicationLang
  //             abstract
  //           }
  //         }
  //       }
  //     `
  //   });
  // }
}
