import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../../http/AuthService/auth.service'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login(form: NgForm) {
    this.authService.login(form.value.username, form.value.password)
  }
}
