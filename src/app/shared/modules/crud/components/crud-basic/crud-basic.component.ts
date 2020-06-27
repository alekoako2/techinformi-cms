import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Store } from '@ngxs/store'
import { MatDialog } from '@angular/material/dialog'
import { Scalars } from '@graphql'
import { PageEvent } from '@angular/material/paginator'

export interface BasicCrud {
  pagination: BasicCrudPagination
  searchText: string
  list: BasicCrudListItem[]
  paginationToChange(pagination: BasicCrudPagination)
  searchInputToTyped(searchText: string)
  addNewToPressed()
  editToPressed(id: Scalars['ID'])
  deleteToPressed(id: Scalars['ID'])
  loadItems()
}

export interface BasicCrudListItem {
  id: Scalars['ID']
  title: string
  subtitle: string
  content: string
  edited?: boolean
}

export interface BasicCrudPagination {
  length: number
  pageIndex: number
  pageSize: number
}

@Component({
  selector: 'app-crud-basic',
  templateUrl: './crud-basic.component.html',
  styleUrls: ['./crud-basic.component.scss'],
})
export class CrudBasicComponent {
  @Output() addNewPressed = new EventEmitter()
  @Output() searchInputTyped = new EventEmitter<string>()
  @Output() editPressed = new EventEmitter<Scalars['ID']>()
  @Output() deletePressed = new EventEmitter<Scalars['ID']>()
  @Output() paginationChanged = new EventEmitter<BasicCrudPagination>()

  @Input() pagination: BasicCrudPagination
  @Input() searchText: string
  @Input() list: BasicCrudListItem[]

  constructor(private store: Store, public dialog: MatDialog) {}

  pageChanged = (e: PageEvent): void => {
    this.pagination = {
      pageIndex: e.pageIndex,
      pageSize: e.pageSize,
      length: e.length,
    }
    this.paginationChanged.emit(this.pagination)
  }

  // openDialog = (
  //   dialogComponent: any,
  //   data?,
  //   width = '900px'
  // ): MatDialogRef<unknown, any> =>
  //   this.custom-dialog.open(dialogComponent, {
  //     width,
  //     data: data ? data : null,
  //   })

  // openDialogForCreation = (): MatDialogRef<unknown, any> =>
  //   this.openDialog(this.create_update_dialog_component)

  // openDialogForDelete = (id): MatDialogRef<unknown, any> =>
  //   this.openDialog(this.delete_dialog_component, id, '450px')

  // openDialogForUpdate = (pub): Subscription =>
  //   this.store
  //     .dispatch(new this.getSingleItemState({ id: pub }))
  //     .subscribe((res) => {
  //       this.openDialog(this.create_update_dialog_component, res)
  //     })

  // search = (): Observable<any> =>
  //   this.store.dispatch(
  //     new this.loadState({
  //       searchText: this.searchText,
  //       newses-crud: this.pageIndex,
  //       limit: this.pageSize,
  //     })
  //   )
}
