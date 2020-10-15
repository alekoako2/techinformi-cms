import { DepositedCreateInput, DepositedUpdateInput } from '@graphql'

export class CountDepositeds {
  static readonly type = '[Depositeds] Count'
}

export class LoadDepositeds {
  static readonly type = '[Depositeds] Fetch All'

  constructor(
    public payload: {
      searchText
      pageIndex
      pageSize
    }
  ) {}
}

export class AddDeposited {
  static readonly type = '[Depositeds] Add'

  constructor(public payload: { depositedCreateInput: DepositedCreateInput }) {}
}

export class UpdateDeposited {
  static readonly type = '[Depositeds] Update'

  constructor(public payload: { depositedUpdateInput: DepositedUpdateInput }) {}
}

export class DeleteDeposited {
  static readonly type = '[Depositeds] Delete'

  constructor(public payload: { id }) {}
}
