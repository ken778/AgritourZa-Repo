import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductionPagePage } from './production-page.page';

const routes: Routes = [
  {
    path: '',
    component: ProductionPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductionPagePageRoutingModule {}
