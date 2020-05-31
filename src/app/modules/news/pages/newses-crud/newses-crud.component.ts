import { Component } from '@angular/core'
import { Store } from '@ngxs/store'
import {
  BasicCrudListItem,
  BasicCrudPagination,
} from '@shared/modules/crud/components/crud-basic/crud-basic.component'
import { MatDialog } from '@angular/material/dialog'
import { News, Scalars } from '@graphql'
import { CreateNewsDialogComponent } from '../../components/create-news-dialog/create-news-dialog.component'
import { UpdateNewsDialogComponent } from '../../components/update-news-dialog/update-news-dialog.component'
import { DeleteNewsDialogComponent } from '../../components/delete-news-dialog/delete-news-dialog.component'
import { LoadNewses } from '../../store/actions'

@Component({
  selector: 'app-index',
  templateUrl: './newses-crud.component.html',
  styleUrls: ['./newses-crud.component.scss'],
})
export class NewsesCrudComponent {
  searchText = ''
  pagination: BasicCrudPagination = {
    length: 0,
    pageIndex: 0,
    pageSize: 10,
  }
  list: BasicCrudListItem[]

  constructor(private store: Store, private dialog: MatDialog) {
    this.loadNewses()
    this.store
      .select((states) => states.newses)
      .subscribe(
        ({ newses, countNewses }: { newses: News[]; countNewses: number }) => {
          this.pagination.length = countNewses
          this.list = newses.map(
            (news: News): BasicCrudListItem => ({
              id: news?.id,
              title: news?.translation[0]?.title,
              subtitle: news?.translation[0]?.description,
              content: news?.translation[0]?.content,
            })
          )
        }
      )
  }
  paginationToChange = (pagination: BasicCrudPagination): void => {
    this.pagination = pagination
    this.loadNewses()
  }

  addNewToPressed = (): void => {
    this.dialog.open(CreateNewsDialogComponent, { width: '900px' })
  }

  searchInputToTyped = (searchText: string): void => {
    this.searchText = searchText
    this.pagination.pageIndex = 0
    this.loadNewses()
  }

  editToPressed = (id: Scalars['ID']): void => {
    this.dialog.open(UpdateNewsDialogComponent, {
      width: '900px',
      data: { id },
    })
  }

  deleteToPressed = (id: Scalars['ID']): void => {
    this.dialog.open(DeleteNewsDialogComponent, {
      data: id,
    })
  }

  loadNewses = (): void => {
    this.store.dispatch(
      new LoadNewses({
        searchText: this.searchText,
        pageIndex: this.pagination.pageIndex,
        pageSize: this.pagination.pageSize,
      })
    )
  }
}
