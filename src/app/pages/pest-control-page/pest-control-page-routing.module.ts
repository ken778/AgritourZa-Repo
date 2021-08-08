import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PestControlPagePage } from './pest-control-page.page';

const routes: Routes = [
  {
    path: '',
    component: PestControlPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PestControlPagePageRoutingModule {}
