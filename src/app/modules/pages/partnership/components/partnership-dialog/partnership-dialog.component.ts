import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-partnership-dialog',
  templateUrl: './partnership-dialog.component.html',
  styleUrls: ['./partnership-dialog.component.scss']
})
export class PartnershipDialogComponent implements OnInit {
  showSpinner = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data, private db: AngularFirestore) {
  }

  ngOnInit() {
    console.log(this.data.title);
    this.loadLists(this.data.title)
      .subscribe((data) => {
        this.showSpinner = false;
        this.data.list = data;
      });
  }

  loadLists(collection) {
    return this.db
      .collection('page_content')
      .doc('partnership')
      .collection(collection)
      .valueChanges();
  }

}
