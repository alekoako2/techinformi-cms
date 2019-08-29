import {Component, Input, OnInit} from '@angular/core';
import {
  CountQrjPublications,
  GetQrjPublication,
  LoadQrjPublications
} from '../../../../../modules/pages/qrj/pages/qrj-publications/state/qrj-publications.actions';
import {Store} from '@ngxs/store';
import {QrjPublicationDialogComponent} from '../../../../../modules/pages/qrj/components/qrj-publication-dialog/qrj-publication-dialog.component';
import {QrjPublicationQuery_qrjPublication} from '../../../../../types/operation-result-types';
import {MatDialog} from '@angular/material';
import {DeleteQrjPublicationDialogComponent} from '../../../../../modules/pages/qrj/components/delete-qrj-publication-dialog/delete-qrj-publication-dialog.component';

@Component({
  selector: 'app-crud-basic',
  templateUrl: './crud-basic.component.html',
  styleUrls: ['./crud-basic.component.scss']
})
export class CrudBasicComponent implements OnInit {

  @Input() length;
  @Input() pageIndex;
  @Input() pageSize;

  @Input() create_update_dialog_component;
  @Input() delete_dialog_component;

  @Input() list;

  @Input() schema: { header, title, description };

  @Input() loadState;
  @Input() countState;

  searchText;

  constructor(private store: Store, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.store.dispatch(new this.countState());
    this.store.dispatch(new this.loadState({searchText: this.searchText, index: this.pageIndex, limit: this.pageSize}));
  }

  pageChanged(event) {

    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;

    this.store.dispatch(new this.loadState({searchText: this.searchText, index: this.pageIndex, limit: this.pageSize}));

  }

  openDialog(dialogComponent: any, data?, width = '900px',): void {
    this.dialog.open(dialogComponent,
      {
        width,
        data: data ? data : null
      }
    );
  }

  openDialogForCreation() {
    this.openDialog(this.create_update_dialog_component);
  }


  openDialogForDelete(id) {
    this.openDialog(this.delete_dialog_component, id, '450px');
  }

  openDialogForUpdate(pub) {
    this.store.dispatch(new GetQrjPublication({id: pub})).subscribe((res) => {
      this.openDialog(this.create_update_dialog_component, res.qrjPublications.qrjPublication);
    });
  }

  search() {
    this.store.dispatch(new this.loadState({searchText: this.searchText, index: this.pageIndex, limit: this.pageSize}));
  }
}
