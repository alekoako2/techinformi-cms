import { Component } from '@angular/core'
import { DeleteQrjPublicationDialogComponent } from '../../components/delete-qrj-publication-dialog/delete-qrj-publication-dialog.component'
import { CreateQrjPublicationDialogComponent } from '../../components/create-qrj-publication-dialog/create-qrj-publication-dialog.component'
import { LoadQrjPublications } from '../../store/actions'
import { Store } from '@ngxs/store'
import { QrjPublication, Scalars } from '@graphql'
import {
  BasicCrud,
  BasicCrudListItem,
  BasicCrudPagination,
} from '@shared/modules/crud/components/crud-basic/crud-basic.component'
import { MatDialog } from '@angular/material/dialog'
import { UpdateQrjPublicationDialogComponent } from '../../components/update-qrj-publication-dialog/update-qrj-publication-dialog.component'

@Component({
  selector: 'qrj-publications-crud',
  templateUrl: './qrj-publications-crud.component.html',
  styleUrls: ['./qrj-publications-crud.component.scss'],
})
export class QrjPublicationsCrudComponent implements BasicCrud {
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
      .select((states) => states.qrjPublications)
      .subscribe(
        ({
          qrjPublications,
          countQrjPublications,
        }: {
          qrjPublications: QrjPublication[]
          countQrjPublications: number
        }) => {
          this.pagination.length = countQrjPublications
          this.list = qrjPublications.map(
            (qrjPublication: QrjPublication): BasicCrudListItem => ({
              id: qrjPublication.id,
              title: qrjPublication.index,
              subtitle: qrjPublication.translation[0]?.title,
              content: qrjPublication.translation[0]?.abstract,
              edited: qrjPublication.edited,
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
    this.dialog.open(CreateQrjPublicationDialogComponent, { width: '900px' })
  }

  searchInputToTyped = (searchText: string): void => {
    this.searchText = searchText
    this.pagination.pageIndex = 0
    this.loadItems()
  }

  editToPressed = (id: Scalars['ID']): void => {
    this.dialog.open(UpdateQrjPublicationDialogComponent, {
      width: '900px',
      data: { id },
    })
  }

  deleteToPressed = (id: Scalars['ID']): void => {
    this.dialog.open(DeleteQrjPublicationDialogComponent, {
      data: id,
    })
  }

  loadItems = (): void => {
    this.store.dispatch(
      new LoadQrjPublications({
        searchText: this.searchText,
        pageIndex: this.pagination.pageIndex,
        pageSize: this.pagination.pageSize,
      })
    )
  }
}
