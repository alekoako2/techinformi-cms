import {Component, OnInit} from '@angular/core';
import {PublicationService} from '../../services/publication.service';
import {map} from 'rxjs/operators';
import {Observable} from 'apollo-client/util/Observable';


@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})

export class PublicationsComponent implements OnInit {
  dogs: Observable<any>;

  constructor(private publicationService: PublicationService) {
  }

  publications: {};

  ngOnInit() {
    // this.publicationService.getPublications()
    //   .valueChanges
    //   .pipe(
    // map(result => result.data && result.data.dogs)
    // );
    // .subscribe(result => this.result = result.json());
  }

}
