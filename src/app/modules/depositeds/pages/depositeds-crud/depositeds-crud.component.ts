import { Component } from '@angular/core'
import { DeleteDepositedDialogComponent } from '../../components/delete-deposited-dialog/delete-deposited-dialog.component'
import { CreateDepositedDialogComponent } from '../../components/create-deposited-dialog/create-deposited-dialog.component'
import { LoadDepositeds } from '../../store/actions'
import { Store } from '@ngxs/store'
import { Deposited, Scalars } from '@graphql'
import {
  BasicCrud,
  BasicCrudListItem,
  BasicCrudPagination,
} from '@shared/modules/crud/components/crud-basic/crud-basic.component'
import { MatDialog } from '@angular/material/dialog'
import { UpdateDepositedDialogComponent } from '../../components/update-deposited-dialog/update-deposited-dialog.component'

@Component({
  selector: 'depositeds-crud',
  templateUrl: './depositeds-crud.component.html',
  styleUrls: ['./depositeds-crud.component.scss'],
})
export class DepositedsCrudComponent implements BasicCrud {
  searchText = ''
  pagination: BasicCrudPagination = {
    length: 0,
    pageIndex: 0,
    pageSize: 10,
  }
  list: BasicCrudListItem[]

  constructor(private store: Store, private dialog: MatDialog) {
    this.loadDepositeds()
    this.store
      .select((states) => states.depositeds)
      .subscribe(
        ({
          depositeds,
          countDepositeds,
        }: {
          depositeds: Deposited[]
          countDepositeds: number
        }) => {
          this.pagination.length = countDepositeds
          this.list = depositeds.map(
            (deposited: Deposited): BasicCrudListItem => ({
              id: deposited.id,
              title: deposited.index,
              subtitle: deposited.translation[0]?.title,
              content: deposited.translation[0]?.resume,
            })
          )
        }
      )
  }

  paginationToChange = (pagination: BasicCrudPagination): void => {
    this.pagination = pagination
    this.loadDepositeds()
  }

  addNewToPressed = (): void => {
    this.dialog.open(CreateDepositedDialogComponent, { width: '900px' })
  }

  searchInputToTyped = (searchText: string): void => {
    this.searchText = searchText
    this.pagination.pageIndex = 0
    this.loadDepositeds()
  }

  editToPressed = (id: Scalars['ID']): void => {
    this.dialog.open(UpdateDepositedDialogComponent, {
      width: '900px',
      data: { id },
    })
  }

  deleteToPressed = (id: Scalars['ID']): void => {
    this.dialog.open(DeleteDepositedDialogComponent, {
      data: id,
    })
  }

  loadDepositeds = (): void => {
    this.store.dispatch(
      new LoadDepositeds({
        searchText: this.searchText,
        pageIndex: this.pagination.pageIndex,
        pageSize: this.pagination.pageSize,
      })
    )
  }
}
