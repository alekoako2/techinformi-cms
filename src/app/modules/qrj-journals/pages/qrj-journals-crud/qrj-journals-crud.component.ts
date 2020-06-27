import { Component } from '@angular/core'
import { DeleteQrjJournalDialogComponent } from '../../components/delete-qrj-journal-dialog/delete-qrj-journal-dialog.component'
import { CreateQrjJournalDialogComponent } from '../../components/create-qrj-journal-dialog/create-qrj-journal-dialog.component'
import { LoadQrjJournals } from '../../store/actions/qrj-journals-crud.actions'
import { Store } from '@ngxs/store'
import { QrjJournal, Scalars } from '@graphql'
import {
  BasicCrud,
  BasicCrudListItem,
  BasicCrudPagination,
} from '@shared/modules/crud/components/crud-basic/crud-basic.component'
import { MatDialog } from '@angular/material/dialog'
import { UpdateQrjJournalDialogComponent } from '../../components/update-qrj-journal-dialog/update-qrj-journal-dialog.component'

@Component({
  selector: 'qrj-journals-crud',
  templateUrl: './qrj-journals-crud.component.html',
  styleUrls: ['./qrj-journals-crud.component.scss'],
})
export class QrjJournalsCrudComponent implements BasicCrud {
  searchText = ''
  pagination: BasicCrudPagination = {
    length: 0,
    pageIndex: 0,
    pageSize: 10,
  }
  list: BasicCrudListItem[]

  constructor(private store: Store, private dialog: MatDialog) {
    this.loadItems()
    this.store
      .select((states) => states.qrjJournals)
      .subscribe(
        ({
          qrjJournals,
          countQrjJournals,
        }: {
          qrjJournals: QrjJournal[]
          countQrjJournals: number
        }) => {
          this.pagination.length = countQrjJournals
          this.list = qrjJournals.map(
            (qrjJournal: QrjJournal): BasicCrudListItem => ({
              id: qrjJournal.id,
              title: qrjJournal.code,
              subtitle: qrjJournal.translation[0]?.name,
              content: qrjJournal.translation[0]?.address,
            })
          )
        }
      )
  }

  paginationToChange = (pagination: BasicCrudPagination): void => {
    this.pagination = pagination
    this.loadItems()
  }

  addNewToPressed = (): void => {
    this.dialog.open(CreateQrjJournalDialogComponent, { width: '900px' })
  }

  searchInputToTyped = (searchText: string): void => {
    this.searchText = searchText
    this.pagination.pageIndex = 0
    this.loadItems()
  }

  editToPressed = (id: Scalars['ID']): void => {
    this.dialog.open(UpdateQrjJournalDialogComponent, {
      width: '900px',
      data: { id },
    })
  }

  deleteToPressed = (id: Scalars['ID']): void => {
    this.dialog.open(DeleteQrjJournalDialogComponent, {
      data: id,
    })
  }

  loadItems = (): void => {
    this.store.dispatch(
      new LoadQrjJournals({
        searchText: this.searchText,
        pageIndex: this.pagination.pageIndex,
        pageSize: this.pagination.pageSize,
      })
    )
  }
}
