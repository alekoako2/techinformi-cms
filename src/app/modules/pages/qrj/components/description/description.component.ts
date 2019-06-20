import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {QrjDialogComponent} from '../qrj-dialog/qrj-dialog.component';
import {AngularFirestore} from '@angular/fire/firestore';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  constructor(@Inject(LOCALE_ID) public localeId: string, private db: AngularFirestore, public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openDialog(): void {
    // this.loadLists(collectionName)
    //   .subscribe((data) => {
    this.dialog.open(QrjDialogComponent, {
      width: '550px',
      // data: {title: collectionName, list: data}
    });
    // });

  }

}
