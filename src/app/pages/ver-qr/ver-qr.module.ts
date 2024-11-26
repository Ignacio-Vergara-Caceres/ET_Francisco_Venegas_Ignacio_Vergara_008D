import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerQrPageRoutingModule } from './ver-qr-routing.module';

import { VerQrPage } from './ver-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerQrPageRoutingModule
  ],
  declarations: [VerQrPage]
})
export class VerQrPageModule {}
