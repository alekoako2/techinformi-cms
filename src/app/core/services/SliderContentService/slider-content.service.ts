import {Injectable} from '@angular/core';
import {Slide} from '../../../shared/models/Slide/slide';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SliderContentService {
  private slides: Slide[] = [];
  private slidesUpdated = new Subject<Slide[]>();

  constructor(private http: HttpClient) {
  }

  getSlides() {
    this.http.get <{ message: string, slides: Slide[] }>('http://localhost:3000/api/slides')
      .subscribe((slideData) => {
        this.slides = slideData.slides;
        this.slidesUpdated.next([...this.slides]);
      });
  }

  getSlideUpdatedListener() {
    return this.slidesUpdated.asObservable();
  }

}
