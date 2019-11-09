import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {map} from 'rxjs/operators';
import {countOecdsQuery, oecdQuery, oecdsQuery} from './oecd-query';
import {
  CountOecdsQuery,
  CreateOecdMutation, CreateOecdMutation_createOecd,
  DeleteOecdMutation,
  OecdQuery,
  OecdsQuery,
  UpdateOecdMutation, UpdateOecdMutation_updateOecd,
} from '../../../../types/operation-result-types';
import {createOecdMutation, deleteOecdMutation, updateOecdMutation} from './oecd-mutations';

@Injectable({
  providedIn: 'root'
})
export class OecdService {

  constructor(private apollo: Apollo, @Inject(LOCALE_ID) public localeId: string) {
  }

  oecdsCount() {
    return this.apollo
      .watchQuery<CountOecdsQuery>({
        query: countOecdsQuery
      }).valueChanges
      .pipe(
        map(count => count.data)
      );
  }

  loadOecds({searchText = '', index = 0, limit = undefined} = {}) {
    return this.apollo
      .watchQuery<OecdsQuery>({
        variables: {
          languageCode: this.localeId.toUpperCase(),
          first: limit,
          skip: index * limit,
          query: searchText
        },
        query: oecdsQuery
      }).valueChanges.pipe(map(oecdsData => oecdsData.data));
  }

  getOecd(id) {
    return this.apollo
      .watchQuery<OecdQuery>({
        variables: {
          id
        },
        query: oecdQuery
      })
      .valueChanges
      .pipe(
        map(oecdData => oecdData.data)
      );
  }

  createOecd(input: CreateOecdMutation_createOecd) {
    return this.apollo
      .mutate<CreateOecdMutation>({
        variables: {
          code: input.code,
          name: input.translation[0].name,
          nameEng: input.translation[1].name
        },
        mutation: createOecdMutation
      })
      .pipe(
        map(oecdData => oecdData.data)
      );
  }

  updateOecd(input: UpdateOecdMutation_updateOecd) {
    return this.apollo
      .mutate<UpdateOecdMutation>({
        variables: {
          id: input.id,
          index: input.code,
          name: input.translation[0].name,
          nameEng: input.translation[1].name,
        },
        mutation: updateOecdMutation
      })
      .pipe(
        map(oecdData => oecdData.data)
      );
  }

  deleteOecd(id: string) {
    console.log(id);
    return this.apollo
      .mutate<DeleteOecdMutation>({
        variables: {
          id: id
        },
        mutation: deleteOecdMutation
      })
      .pipe(
        map(oecdIndex => oecdIndex.data)
      );
  }
}
