import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaterPagePage } from './water-page.page';

const routes: Routes = [
  {
    path: '',
    component: WaterPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaterPagePageRoutingModule {}
