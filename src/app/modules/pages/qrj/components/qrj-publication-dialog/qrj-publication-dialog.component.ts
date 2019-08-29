import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';

import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {QrjPublicationService} from '../../services/qrj-publications.service';
import {
  CreateQrjPublicationMutation,
  CreateQrjPublicationMutation_createQrjPublication,
  QrjPublicationQuery_qrjPublication
} from '../../../../../types/operation-result-types';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngxs/store';
import {AddQrjPublication, UpdateQrjPublication} from '../../pages/qrj-publications/state/qrj-publications.actions';

@Component({
  selector: 'app-qrj-publication-dialog',
  templateUrl: './qrj-publication-dialog.component.html',
  styleUrls: ['./qrj-publication-dialog.component.scss']
})

export class QrjPublicationDialogComponent implements OnInit {

  showCreate: boolean = true;
  // formGroup: FormGroup;
  publicationData: QrjPublicationQuery_qrjPublication;

  constructor(private cdr: ChangeDetectorRef, private formBuilder: FormBuilder, private store: Store, private qrjPublicationService: QrjPublicationService, public dialogRef: MatDialogRef<QrjPublicationDialogComponent>, @Inject(MAT_DIALOG_DATA) data?: QrjPublicationQuery_qrjPublication) {
    this.publicationData = {
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
      oecd:
        {
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
          abstract: '',
          publicationAuthor: '',
          publicationLang: '',
          title: ''
        },
        {
          abstract: '',
          publicationAuthor: '',
          publicationLang: '',
          title: ''
        }
      ],
      year: ''
    };

    if (data) {
      this.showCreate = false;
      this.publicationData = data;
    }
  }

  ngOnInit() {
  }


  arrayThree(n: number, startFrom: number): number[] {
    return [...Array(n).keys()].map(i => i + startFrom);
  }

  create() {
    this.store.dispatch(new AddQrjPublication(this.publicationData));
    // this.formGroup.reset();
    this.dialogRef.close();
  }

  update() {
    this.store.dispatch(new UpdateQrjPublication(this.publicationData));
    this.dialogRef.close();
    // this.formGroup.reset();
  }

}
