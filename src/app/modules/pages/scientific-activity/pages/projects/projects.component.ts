import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  content: string;

  constructor(@Inject(LOCALE_ID) public localeId: string, private db: AngularFirestore) {
  }

  ngOnInit() {
    this.db
      .collection('page_content')
      .doc('scientific_activity')
      .collection('projects')
      .doc(this.localeId)
      .valueChanges()
      .subscribe((data) => {
        this.content = data['content'];
      });
  }

}
