import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AuthenticationRoutingModule } from './authentication-routing.module'
import { LoginComponent } from './pages/login/login.component'
import { RegisterComponent } from './pages/register/register.component'
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component'
import { FormsModule } from '@angular/forms'
import { LayoutComponent } from './components/layout/layout.component'
import { ErrorsComponent } from './components/errors/errors.component'
import { LayoutContainerModule } from '@shared/components/layout-container'
import { MatCardModule } from '@angular/material/card'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    LayoutComponent,
    ErrorsComponent,
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    LayoutContainerModule,
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class AuthenticationModule {}
