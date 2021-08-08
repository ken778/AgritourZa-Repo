import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PestControlPagePageRoutingModule } from './pest-control-page-routing.module';

import { PestControlPagePage } from './pest-control-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PestControlPagePageRoutingModule
  ],
  declarations: [PestControlPagePage]
})
export class PestControlPagePageModule {}
