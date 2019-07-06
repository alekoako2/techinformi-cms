import {Component, Inject, OnInit} from '@angular/core';

import {MAT_DIALOG_DATA} from '@angular/material';
import {QrjPublicationService} from '../../services/qrjPublication.service';
import {
  CreateQrjPublicationMutation,
  CreateQrjPublicationMutation_createQrjPublication,
  QrjPublicationQuery_qrjPublication
} from '../../../../../types/operation-result-types';

@Component({
  selector: 'app-qrj-publication-dialog',
  templateUrl: './qrj-publication-dialog.component.html',
  styleUrls: ['./qrj-publication-dialog.component.scss']
})
export class QrjPublicationDialogComponent implements OnInit {

  publicationData: QrjPublicationQuery_qrjPublication = {
    id: '',
    index: '',
    inputDate: '',
    journal: {
      code: '',
      translation: [
        {
          name: ''
        }
      ]
    },
    number: '',
    oecd: {
      code: '',
      translation: [
        {
          name: ''
        }
      ]
    },
    pages: '',
    translation: [
      {
        title: '',
        publicationAuthor: '',
        publicationLang: '',
        abstract: ''
      },
      {
        title: '',
        publicationAuthor: '',
        publicationLang: '',
        abstract: ''
      }
    ],
    year: ''
  };

  constructor(private qrjPublicationService: QrjPublicationService, @Inject(MAT_DIALOG_DATA) data?: QrjPublicationQuery_qrjPublication) {
    if (data) {
      this.publicationData = data;
    }
  }

  ngOnInit() {
  }

  save() {
    this.qrjPublicationService.createQrjPublication(this.publicationData)
      .subscribe((res: CreateQrjPublicationMutation) => {
        // this.console.log(res.createQrjPublication.index);
      });
  }

  arrayThree(n: number, startFrom: number): number[] {
    return [...Array(n).keys()].map(i => i + startFrom);
  }

}
