import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductionPagePageRoutingModule } from './production-page-routing.module';

import { ProductionPagePage } from './production-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductionPagePageRoutingModule
  ],
  declarations: [ProductionPagePage]
})
export class ProductionPagePageModule {}
