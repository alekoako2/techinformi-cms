import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-employees-structure',
  templateUrl: './employees-structure.component.html',
  styleUrls: ['./employees-structure.component.scss']
})
export class EmployeesStructureComponent implements OnInit {
  title: string;

  constructor(@Inject(LOCALE_ID) public localeId: string) {
  }

  ngOnInit() {
  }

}
