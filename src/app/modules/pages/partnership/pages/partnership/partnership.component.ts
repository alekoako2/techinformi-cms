import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {MatDialog} from '@angular/material';
import {PartnershipDialogComponent} from '../../components/partnership-dialog/partnership-dialog.component';

@Component({
  selector: 'app-partnership',
  templateUrl: './partnership.component.html',
  styleUrls: ['./partnership.component.scss']
})
export class PartnershipComponent implements OnInit {
  data: any;

  constructor(@Inject(LOCALE_ID) public localeId: string, public dialog: MatDialog) {
  }

  ngOnInit() {

  }

  openDialog(collectionName): void {
    this.dialog.open(PartnershipDialogComponent, {
      width: '550px',
      data: {title: collectionName}
    });


  }


}

