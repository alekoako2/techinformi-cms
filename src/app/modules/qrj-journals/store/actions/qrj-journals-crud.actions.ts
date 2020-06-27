import { QrjJournalCreateInput, QrjJournalUpdateInput } from '@graphql'

export class CountQrjJournals {
  static readonly type = '[QrjJournals] Count'
}

export class LoadQrjJournals {
  static readonly type = '[QrjJournals] Fetch All'

  constructor(
    public payload: {
      searchText
      pageIndex
      pageSize
    }
  ) {}
}

export class AddQrjJournal {
  static readonly type = '[QrjJournals] Add'

  constructor(
    public payload: { qrjJournalCreateInput: QrjJournalCreateInput }
  ) {}
}

export class UpdateQrjJournal {
  static readonly type = '[QrjJournals] Update'

  constructor(
    public payload: { qrjJournalUpdateInput: QrjJournalUpdateInput }
  ) {}
}

export class DeleteQrjJournal {
  static readonly type = '[QrjJournals] Delete'

  constructor(public payload: { id }) {}
}
