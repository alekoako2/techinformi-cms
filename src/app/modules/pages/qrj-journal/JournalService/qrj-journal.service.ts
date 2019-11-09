import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {countQrjJournalsQuery, qrjJournalQuery, qrjJournalsQuery} from './journalQuery';
import {map} from 'rxjs/operators';
import {
  CountQrjJournalsQuery,
  CreateQrjJournalMutation,
  CreateQrjJournalMutation_createQrjJournal,
  DeleteQrjJournalMutation,
  QrjJournalQuery,
  QrjJournalsQuery,
  UpdateQrjJournalMutation,
  UpdateQrjJournalMutation_updateQrjJournal
} from '../../../../types/operation-result-types';
import {createQrjJournalMutation, deleteQrjJournalMutation, updateQrjJournalMutation} from './qrj-journal-mutations';

@Injectable({
  providedIn: 'root'
})
export class QrjJournalService {

  constructor(private apollo: Apollo, @Inject(LOCALE_ID) public localeId: string) {
  }

  qrjJournalsCount() {
    return this.apollo
      .watchQuery<CountQrjJournalsQuery>({
        query: countQrjJournalsQuery
      }).valueChanges
      .pipe(
        map(count => count.data)
      );
  }

  loadQrjJournals({searchText = '', index = 0, limit = undefined} = {}) {
    return this.apollo
      .watchQuery<QrjJournalsQuery>({
        variables: {
          languageCode: this.localeId.toUpperCase(),
          first: limit,
          skip: index * limit,
          query: searchText
        },
        query: qrjJournalsQuery
      }).valueChanges.pipe(map(qrjJournalsData => qrjJournalsData.data));
  }

  getQrjJournal(id) {
    return this.apollo
      .watchQuery<QrjJournalQuery>({
        variables: {
          id
        },
        query: qrjJournalQuery
      })
      .valueChanges
      .pipe(
        map(qrjJournalData => qrjJournalData.data)
      );
  }

  createQrjJournal(input: CreateQrjJournalMutation_createQrjJournal) {
    return this.apollo
      .mutate<CreateQrjJournalMutation>({
        variables: {
          code: input.code,
          name: input.translation[0].name,
          address: input.translation[0].address,
          nameEng: input.translation[1].name,
          addressEng: input.translation[1].address
        },
        mutation: createQrjJournalMutation
      })
      .pipe(
        map(qrjJournalData => qrjJournalData.data)
      );
  }

  updateQrjJournal(input: UpdateQrjJournalMutation_updateQrjJournal) {
    return this.apollo
      .mutate<UpdateQrjJournalMutation>({
        variables: {
          id: input.id,
          index: input.code,
          name: input.translation[0].name,
          nameEng: input.translation[1].name,
        },
        mutation: updateQrjJournalMutation
      })
      .pipe(
        map(qrjJournalData => qrjJournalData.data)
      );
  }

  deleteQrjJournal(id: string) {
    console.log(id);
    return this.apollo
      .mutate<DeleteQrjJournalMutation>({
        variables: {
          id: id
        },
        mutation: deleteQrjJournalMutation
      })
      .pipe(
        map(qrjJournalIndex => qrjJournalIndex.data)
      );
  }

}
