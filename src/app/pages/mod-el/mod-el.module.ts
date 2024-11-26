import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModElPageRoutingModule } from './mod-el-routing.module';

import { ModElPage } from './mod-el.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModElPageRoutingModule
  ],
  declarations: [ModElPage]
})
export class ModElPageModule {}
