import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Oecd} from '../../../../../shared/models/Oecd/oecd';

@Component({
  selector: 'app-qrj-dialog',
  templateUrl: './qrj-dialog.component.html',
  styleUrls: ['./qrj-dialog.component.scss']
})
export class QrjDialogComponent implements OnInit {
  showSpinner = true;

  oecds: Oecd[] = [];
  searchOecd: string;

  constructor(@Inject(LOCALE_ID) public localeId: string, private db: AngularFirestore) {

  }

  ngOnInit() {
    this.db
      .collection('oecds')
      .snapshotChanges()
      .subscribe((oecds) => {
        oecds.map(oecd => {
          const oecdKey = oecd.payload.doc.id;
          this.db
            .collection('oecds_translation')
            .doc('0')
            .collection(this.localeId)
            .doc(oecdKey)
            .valueChanges()
            .subscribe((translatedData) => {
              this.showSpinner = false;
              const newOecd: Oecd = oecd.payload.doc.data() as Oecd;
              newOecd.translatedData = translatedData;
              this.oecds.push(newOecd);
            });
        });
      });
  }

}
