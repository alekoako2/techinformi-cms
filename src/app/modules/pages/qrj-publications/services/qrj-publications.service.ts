import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {map} from 'rxjs/operators';
import {
  CountQrjPublicationsQuery, CreateQrjPublicationMutation, CreateQrjPublicationMutation_createQrjPublication, DeleteQrjPublicationMutation,
  QrjPublicationQuery, QrjPublicationsQuery, UpdateQrjPublicationMutation, UpdateQrjPublicationMutation_updateQrjPublication
} from '../../../../types/operation-result-types';
import {createQrjPublicationMutation, deleteQrjPublicationMutation, updateQrjPublicationMutation} from './qrj-publications-mutations';
import {countQrjPublicationsQuery, qrjPublicationQuery, qrjPublicationsQuery} from './qrj-publications-query';

@Injectable({
  providedIn: 'root'
})
export class QrjPublicationService {
  constructor(private apollo: Apollo, @Inject(LOCALE_ID) public localeId: string) {
  }

  publicationsCount() {
    return this.apollo
      .watchQuery<CountQrjPublicationsQuery>({
        query: countQrjPublicationsQuery
      }).valueChanges.pipe(map(count => count.data));
  }

  loadQrjPublications(searchText = '', index = 0, limit = 10) {

    return this.apollo
      .watchQuery<QrjPublicationsQuery>({
        variables: {
          languageCode: this.localeId.toUpperCase(),
          first: limit,
          skip: index * limit,
          query: searchText
        },
        query: qrjPublicationsQuery
      }).valueChanges.pipe(map(qrjsData => qrjsData.data));
  }

  getPublication(id) {
    return this.apollo
      .watchQuery<QrjPublicationQuery>({
        variables: {
          id
        },
        query: qrjPublicationQuery
      })
      .valueChanges
      .pipe(
        map(qrjPublicationData => qrjPublicationData.data)
      );
  }

  createQrjPublication(input: CreateQrjPublicationMutation_createQrjPublication) {
    return this.apollo
      .mutate<CreateQrjPublicationMutation>({
        variables: {
          index: input.index,
          year: input.year,
          number: input.number,
          pages: input.pages,
          oecd: input.oecd.code,
          journal: input.journal.code,
          title: input.translation[0].title,
          publicationAuthor: input.translation[0].publicationAuthor,
          publicationLang: input.translation[0].publicationLang,
          abstract: input.translation[0].abstract,
          titleEng: input.translation[1].title,
          publicationAuthorEng: input.translation[1].publicationAuthor,
          publicationLangEng: input.translation[1].publicationLang,
          abstractEng: input.translation[1].abstract,
        },
        mutation: createQrjPublicationMutation
      })
      .pipe(
        map(qrjPublicationData => qrjPublicationData.data)
      );
  }

  updateQrjPublication(input: UpdateQrjPublicationMutation_updateQrjPublication) {
    return this.apollo
      .mutate<UpdateQrjPublicationMutation>({
        variables: {
          id: input.id,
          index: input.index,
          year: input.year,
          number: input.number,
          pages: input.pages,
          oecd: input.oecd.code,
          journal: input.journal.code,
          title: input.translation[0].title,
          publicationAuthor: input.translation[0].publicationAuthor,
          publicationLang: input.translation[0].publicationLang,
          abstract: input.translation[0].abstract,
          titleEng: input.translation[1].title,
          publicationAuthorEng: input.translation[1].publicationAuthor,
          publicationLangEng: input.translation[1].publicationLang,
          abstractEng: input.translation[1].abstract,
        },
        mutation: updateQrjPublicationMutation
      })
      .pipe(
        map(qrjPublicationData => qrjPublicationData.data)
      );
  }

  deleteQrjPublication(id: string) {
    return this.apollo
      .mutate<DeleteQrjPublicationMutation>({
        variables: {
          id: id
        },
        mutation: deleteQrjPublicationMutation
      })
      .pipe(
        map(qrjPublicationIndex => qrjPublicationIndex.data)
      );
  }
}
