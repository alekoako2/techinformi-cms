import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  content: string;

  constructor(@Inject(LOCALE_ID) public localeId: string, private db: AngularFirestore) {
  }

  ngOnInit() {
    this.db
      .collection('page_content')
      .doc('services')
      .valueChanges()
      .subscribe((data) => {
        const key = 'content';
        this.content = data[key];
      });
  }

}
