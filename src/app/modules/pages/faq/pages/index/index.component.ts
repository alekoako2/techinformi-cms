import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  config = {
    panels: [
      {name: 'კითხვა N1', answer: 'პასუხი პასუხი პასუხი პასუხი პასუხი პასუხი პასუხი პასუხი პასუხი პასუხი პასუხი პასუხი პასუხი '},
      {name: 'კითხვა N2', answer: 'პასუხი პასუხი პასუხი პასუხი პასუხი პასუხი პასუხი პასუხი პასუხი პასუხი პასუხი პასუხი პასუხი '},
      {name: 'კითხვა N3', answer: 'პასუხი პასუხი პასუხი პასუხი პასუხი პასუხი პასუხი პასუხი პასუხი პასუხი პასუხი პასუხი პასუხი '}
    ]
  };

  constructor() {
  }

  ngOnInit() {
  }

}
