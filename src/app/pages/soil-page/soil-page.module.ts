import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoilPagePageRoutingModule } from './soil-page-routing.module';

import { SoilPagePage } from './soil-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoilPagePageRoutingModule
  ],
  declarations: [SoilPagePage]
})
export class SoilPagePageModule {}
