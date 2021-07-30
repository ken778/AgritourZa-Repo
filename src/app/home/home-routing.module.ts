import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'dashboard-page',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/dashboard-page/dashboard-page.module').then( m => m.DashboardPagePageModule)
          }
        ]
      },
      {
        path:'dashboard',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'soil-page',
        pathMatch: 'full'
      },
     
      {
        path:'soil-page',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/soil-page/soil-page.module').then( m => m.SoilPagePageModule)
          }
        ]
      },
      {
        path:'water-page',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/water-page/water-page.module').then( m => m.WaterPagePageModule)
          }
        ]
      },
      {
        path:'production-page',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/production-page/production-page.module').then( m => m.ProductionPagePageModule)
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
