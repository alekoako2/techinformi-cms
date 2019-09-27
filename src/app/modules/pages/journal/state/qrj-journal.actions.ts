import {
  CreateQrjJournalMutation_createQrjJournal,
  UpdateQrjJournalMutation_updateQrjJournal
} from '../../../../types/operation-result-types';

export class CountQrjJournals {
  static readonly type = '[QrjJournal] Count QrjJournals';

  constructor() {
  }
}

export class LoadQrjJournals {
  static readonly type = '[QrjJournal] Load QrjJournals';

  constructor(public payload:
                {
                  searchText,
                  index,
                  limit
                }
  ) {
  }
}

export class GetQrjJournal {
  static readonly type = '[QrjJournal] Get QrjJournal';

  constructor(public payload: { id }) {
  }
}

export class DeleteQrjJournal {
  static readonly type = '[QrjJournal] Delete QrjJournal';

  constructor(public payload: { id }) {
  }
}

export class CreateQrjJournal {
  static readonly type = '[QrjJournal] Add QrjJournal';

  constructor(public payload: CreateQrjJournalMutation_createQrjJournal
  ) {
  }
}

export class UpdateQrjJournal {
  static readonly type = '[QrjJournal] Update QrjJournal';

  constructor(public payload: UpdateQrjJournalMutation_updateQrjJournal
  ) {
  }
}
