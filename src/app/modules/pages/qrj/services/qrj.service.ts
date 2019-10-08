import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {Apollo} from 'apollo-angular';

import {map} from 'rxjs/operators';
import {countQrjsQuery, qrjQuery, qrjsQuery} from './qrj-query';
import {createQrjMutation, deleteQrjMutation, updateQrjMutation} from './qrj-mutations';
import {
  CountQrjsQuery,
  CreateQrjMutation,
  CreateQrjMutation_createQrj, DeleteQrjMutation,
  QrjQuery,
  QrjsQuery, UpdateQrjMutation, UpdateQrjMutation_updateQrj
} from '../../../../types/operation-result-types';

@Injectable({
  providedIn: 'root'
})
export class QrjService {
  constructor(private apollo: Apollo, @Inject(LOCALE_ID) public localeId: string) {
  }

  qrjsCount() {
    return this.apollo
      .watchQuery<CountQrjsQuery>({
        query: countQrjsQuery
      }).valueChanges
      .pipe(
        map(count => count.data)
      );
  }

  loadQrjs(searchText = '', index = 0, limit = 10) {
    return this.apollo
      .watchQuery<QrjsQuery>({
        variables: {
          languageCode: this.localeId.toUpperCase(),
          first: limit,
          skip: index * limit,
          query: searchText
        },
        query: qrjsQuery
      }).valueChanges.pipe(map(qrjsData => qrjsData.data));
  }

  getQrj(id) {
    return this.apollo
      .watchQuery<QrjQuery>({
        variables: {
          id
        },
        query: qrjQuery
      })
      .valueChanges
      .pipe(
        map(qrjData => qrjData.data)
      );
  }

  createQrj(input: CreateQrjMutation_createQrj) {
    return this.apollo
      .mutate<CreateQrjMutation>({
        variables: {
          year: input.year,
          pub_num1: input.journal[0].pubNumber,
          pub_num1_address_ka: input.journal[0].translation[0].address,
          pub_num1_address_en: input.journal[0].translation[1].address,
          pub_num2: input.journal[1].pubNumber,
          pub_num2_address_ka: input.journal[1].translation[0].address,
          pub_num2_address_en: input.journal[1].translation[1].address,
        },
        mutation: createQrjMutation
      })
      .pipe(
        map(qrjData => qrjData.data)
      );
  }

  updateQrj(input: UpdateQrjMutation_updateQrj) {
    return this.apollo
      .mutate<UpdateQrjMutation>({
        variables: {
          id: input.id,
          year: input.year,
          pub_num1: input.journal[0].pubNumber,
          pub_num1_address_ka: input.journal[0].translation[0].address,
          pub_num1_address_en: input.journal[0].translation[1].address,
          pub_num2: input.journal[1].pubNumber,
          pub_num2_address_ka: input.journal[1].translation[0].address,
          pub_num2_address_en: input.journal[1].translation[1].address,
        },
        mutation: updateQrjMutation
      })
      .pipe(
        map(qrjData => qrjData.data)
      );
  }

  deleteQrj(id: string) {
    console.log(id);
    return this.apollo
      .mutate<DeleteQrjMutation>({
        variables: {
          id: id
        },
        mutation: deleteQrjMutation
      })
      .pipe(
        map(qrjIndex => qrjIndex.data)
      );
  }


}
