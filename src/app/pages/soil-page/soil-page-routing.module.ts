import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoilPagePage } from './soil-page.page';

const routes: Routes = [
  {
    path: '',
    component: SoilPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoilPagePageRoutingModule {}
