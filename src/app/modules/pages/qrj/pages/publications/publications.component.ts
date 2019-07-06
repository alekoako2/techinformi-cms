import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {QrjPublicationDialogComponent} from '../../components/qrj-publication-dialog/qrj-publication-dialog.component';
import {
  CountQrjPublicationsQuery,
  QrjPublicationQuery,
  QrjPublicationQuery_qrjPublication, QrjPublicationsQuery
} from '../../../../../types/operation-result-types';
import {QrjPublicationService} from '../../services/qrjPublication.service';


@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})

export class PublicationsComponent implements OnInit {
  qrjs: QrjPublicationQuery_qrjPublication[];
  pageSize = 12;
  pageIndex = 0;
  countQrjs;
  searchText;

  title = 'al';

  constructor(private qrjPublicationService: QrjPublicationService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.qrjPublicationService.publicationsCount()
      .subscribe((res: CountQrjPublicationsQuery) => {
        this.countQrjs = res.countQrjPublications;
      });
    this.qrjPublicationService.loadQrjPublications(null, this.pageIndex, this.pageSize)
      .subscribe((res: QrjPublicationsQuery) => {
        this.qrjs = res.qrjPublications;
      });
  }

  getServerData(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;

    this.qrjPublicationService.loadQrjPublications(null, event.pageIndex, event.pageSize)
      .subscribe((res: QrjPublicationsQuery) => {
        this.qrjs = res.qrjPublications;
      });
  }

  searchPublication() {
    this.qrjPublicationService.loadQrjPublications(this.searchText, this.pageIndex, this.pageSize)
      .subscribe((res: QrjPublicationsQuery) => {
        this.qrjs = res.qrjPublications;
      });
  }

  openDialog(data?: QrjPublicationQuery_qrjPublication): void {
    this.dialog.open(QrjPublicationDialogComponent,
      {
        width: '900px',
        data: data ? data : null
      }
    );
  }

  addPublication() {
    this.openDialog();
  }

  editPublication(pub) {
    this.qrjPublicationService
      .getPublication(pub)
      .subscribe((res: QrjPublicationQuery) => {
        this.openDialog(res.qrjPublication);
      });
  }

}
