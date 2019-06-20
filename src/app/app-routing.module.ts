import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {
    path: '', redirectTo: '/auth/login', pathMatch: 'full'
  },
  {
    path: 'home', loadChildren:
      () => import( './modules/pages/home/home.module')
        .then(mod => mod.HomeModule)
  },
  {
    path: 'auth', loadChildren:
      () => import( './core/authentication/authentication.module')
        .then(mod => mod.AuthenticationModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes, {preloadingStrategy: PreloadAllModules}
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
