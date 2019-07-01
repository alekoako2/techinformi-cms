import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './core/guards/auth.guard';
import {AuthPageGuard} from './core/guards/AuthPage/auth-page.guard';

const appRoutes: Routes = [
  {
    path: '', redirectTo: '/auth/login', pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren:
      () => import( './core/authentication/authentication.module')
        .then(mod => mod.AuthenticationModule),
    canActivate: [AuthPageGuard]
  },
  {
    path: 'home', loadChildren:
      () => import( './modules/pages/home/home.module')
        .then(mod => mod.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'geoPublications', loadChildren:
      () => import( './modules/pages/qrj/qrj.module')
        .then(mod => mod.QrjModule),
    canActivate: [AuthGuard]
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
