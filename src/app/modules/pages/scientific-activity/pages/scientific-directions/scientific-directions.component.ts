import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {Slide} from '../../../../../shared/models/Slide/slide';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-scientific-directions',
  templateUrl: './scientific-directions.component.html',
  styleUrls: ['./scientific-directions.component.scss']
})
export class ScientificDirectionsComponent implements OnInit {
  showSpinner = true;

  slides: object;

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: true,
    speed: 1000,
    autoplay: true
  };

  constructor(@Inject(LOCALE_ID) public localeId: string, private db: AngularFirestore) {
  }

  ngOnInit() {
    this.db
      .collection('page_content')
      .doc('scientific_activity')
      .collection('scientific_directions')
      .doc(this.localeId)
      .collection('slides')
      .valueChanges()
      .subscribe((data) => {
        this.showSpinner = false;

        this.slides = data;
      });
  }

}
