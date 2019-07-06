import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {map} from 'rxjs/operators';
import {oecdsQuery} from './oecdQuery';
import {OecdsQuery} from '../../../../types/operation-result-types';

@Injectable({
  providedIn: 'root'
})
export class OecdService {

  constructor(private apollo: Apollo, @Inject(LOCALE_ID) public localeId: string) {
  }

  getOecds() {
    return this.apollo
      .watchQuery<OecdsQuery>({
        variables: {
          languageCode: this.localeId.toUpperCase(),
        },
        query: oecdsQuery
      }).valueChanges.pipe(map(oecdsData => oecdsData.data));
  }
}
