import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  showSpinner = true;

  title: string;
  content: string;

  constructor(@Inject(LOCALE_ID) public localeId: string, private db: AngularFirestore) {
  }

  ngOnInit() {
    this.db
      .collection('page_content')
      .doc('about_us')
      .collection('general')
      .doc(this.localeId)
      .valueChanges()
      .subscribe((data) => {
        this.showSpinner = false;
        const key = 'content';
        this.content = data[key];
      });
  }

}
