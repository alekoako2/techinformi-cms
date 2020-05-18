import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BackToTopComponent } from './core/footer/back-to-top/back-to-top.component'
import { NotFoundComponent } from './shared/components/not-found/not-found.component'
import { FooterComponent } from './core/footer/footer.component'
import { FixedBottomToolbarComponent } from './core/footer/fixed-bottom-toolbar/fixed-bottom-toolbar.component'
import { HeaderModule } from './core/header/header.module'
import { FlexLayoutModule } from '@angular/flex-layout'
import {
  HashLocationStrategy,
  LocationStrategy,
  registerLocaleData,
} from '@angular/common'
import localeKa from '@angular/common/locales/ka'
import localeKaExtra from '@angular/common/locales/extra/ka'
import { GraphQLModule } from './graphql.module'
import { NgxsFormPluginModule } from '@ngxs/form-plugin'
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin'
import { NgxsModule } from '@ngxs/store'
import { environment } from '@env'
import { ErrorsComponent } from './core/authentication/components/errors/errors.component'
import { MatSidenavModule } from '@angular/material/sidenav'

registerLocaleData(localeKa, 'ka', localeKaExtra)

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NotFoundComponent,
    BackToTopComponent,
    FixedBottomToolbarComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
    HeaderModule,
    GraphQLModule,
    NgxsModule.forRoot([], { developmentMode: !environment }),
    NgxsFormPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production }),
    NgxsLoggerPluginModule.forRoot({ disabled: environment.production }),
    MatSidenavModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
  entryComponents: [ErrorsComponent],
})
export class AppModule {}
