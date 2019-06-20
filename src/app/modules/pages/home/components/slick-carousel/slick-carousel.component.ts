import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {SliderContentService} from '../../../../../core/services/SliderContentService/slider-content.service';
import {Slide} from '../../../../../shared/models/Slide/slide';

@Component({
  selector: 'app-slick-carousel',
  templateUrl: './slick-carousel.component.html',
  styleUrls: ['./slick-carousel.component.scss']
})
export class SlickCarouselComponent implements OnInit {
  showSpinner = true;
  slides: Slide[] = [];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    arrows: false,
    centerPadding: window.innerWidth <= 1300 ? 0 : 15 + '%',
    speed: 1000,
    // autoplay: true
  };

  constructor(@Inject(LOCALE_ID) public localeId: string, public slidesService: SliderContentService, private db: AngularFirestore) {
  }

  ngOnInit() {
    this.db
      .collection('slides')
      .snapshotChanges()
      .subscribe((slides) => {
        slides.map(slide => {
          const slideKey = slide.payload.doc.id;
          this.db
            .collection('slides_translation')
            .doc(this.localeId)
            .collection('slides')
            .doc(slideKey)
            .valueChanges()
            .subscribe((translatedData) => {
              this.showSpinner = false;
              const newSlide: Slide = slide.payload.doc.data() as Slide;
              newSlide.translatedData = translatedData;
              this.slides.push(newSlide);
            });
        });
      });
  }
}
