import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { AuthGuard } from '@shared/guards/auth.guard'
import { AuthPageGuard } from '@shared/guards/AuthPage/auth-page.guard'

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./core/authentication/authentication.module').then(
        (mod) => mod.AuthenticationModule
      ),
    canActivate: [AuthPageGuard],
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((mod) => mod.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'qrj-publications',
    loadChildren: () =>
      import('./modules/qrj-publications/qrj-publications.module').then(
        (mod) => mod.QrjPublicationsModule
      ),
    canActivate: [AuthGuard],
  },
  // {
  //   path: 'oecd',
  //   loadChildren: () =>
  //     import('./modules/oecd/oecd.module').then((mod) => mod.OecdModule),
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'technology_transfer_centers',
  //   loadChildren: () =>
  //     import(
  //       './modules/technology-transfer-centers/technology-transfer-centers.module'
  //     ).then((mod) => mod.TechnologyTransferCentersModule),
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'scientists_experts',
  //   loadChildren: () =>
  //     import('./modules/expert/expert.module').then((mod) => mod.ExpertModule),
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'research_projects',
  //   loadChildren: () =>
  //     import('./modules/research-project/research-project.module').then(
  //       (mod) => mod.ResearchProjectModule
  //     ),
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'news',
  //   loadChildren: () =>
  //     import('./modules/news/news.module').then((mod) => mod.NewsModule),
  //   canActivate: [AuthGuard],
  // },
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
