import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaterPagePageRoutingModule } from './water-page-routing.module';

import { WaterPagePage } from './water-page.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaterPagePageRoutingModule,
   
  ],
  declarations: [WaterPagePage]
})
export class WaterPagePageModule {}
