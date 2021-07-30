import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'soil-page',
    loadChildren: () => import('./pages/soil-page/soil-page.module').then( m => m.SoilPagePageModule)
  },
  {
    path: 'water-page',
    loadChildren: () => import('./pages/water-page/water-page.module').then( m => m.WaterPagePageModule)
  },
  {
    path: 'production-page',
    loadChildren: () => import('./pages/production-page/production-page.module').then( m => m.ProductionPagePageModule)
  },
  {
    path: 'dashboard-page',
    loadChildren: () => import('./pages/dashboard-page/dashboard-page.module').then( m => m.DashboardPagePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
