import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {journalsQuery} from './journalQuery';
import {map} from 'rxjs/operators';
import {QrjJournalsQuery} from '../../../../types/operation-result-types';

@Injectable({
  providedIn: 'root'
})
export class QrjJournalService {

  constructor(private apollo: Apollo, @Inject(LOCALE_ID) public localeId: string) {
  }

  getQrjJournals() {
    return this.apollo
      .watchQuery<QrjJournalsQuery>({
        variables: {
          languageCode: this.localeId.toUpperCase(),
        },
        query: journalsQuery
      }).valueChanges.pipe(map(qrjJournalsData => qrjJournalsData.data));
  }
}
