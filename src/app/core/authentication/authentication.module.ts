import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthenticationRoutingModule} from './authentication-routing.module';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {ForgotPasswordComponent} from './pages/forgot-password/forgot-password.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/modules/shared/shared.module';
import {LanguageChangerModule} from '../../shared/modules/language-changer/language-changer.module';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgotPasswordComponent, LayoutComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthenticationRoutingModule,
    FormsModule,
    LanguageChangerModule
  ]
})
export class AuthenticationModule {
}
