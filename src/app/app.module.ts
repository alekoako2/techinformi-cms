import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BackToTopComponent} from './core/footer/back-to-top/back-to-top.component';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';
import {FooterComponent} from './core/footer/footer.component';
import {FixedBottomToolbarComponent} from './core/footer/fixed-bottom-toolbar/fixed-bottom-toolbar.component';
import {MaterialModule} from './shared/modules/material/material.module';
import {HeaderModule} from './core/header/header.module';
import {HideMissingLanguageElementModule} from './shared/modules/hide-missing-language-element/hide-missing-language-element.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';
import localeKa from '@angular/common/locales/ka';
import {GraphQLModule} from './graphql.module';
import {NgxsFormPluginModule} from '@ngxs/form-plugin';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {NgxsModule} from '@ngxs/store';
import {environment} from '../environments/environment';

registerLocaleData(localeKa, 'KA');

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
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    HeaderModule,
    HideMissingLanguageElementModule,
    GraphQLModule,
    NgxsModule.forRoot([], {developmentMode: !environment.production}),
    NgxsFormPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
