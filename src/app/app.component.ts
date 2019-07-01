import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {AuthService} from './core/services/AuthService/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'techinform-cms';

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.setUser(JSON.parse(localStorage.getItem('USER')));
  }

}
