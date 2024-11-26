import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComentariosDejadosPageRoutingModule } from './comentarios-dejados-routing.module';

import { ComentariosDejadosPage } from './comentarios-dejados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComentariosDejadosPageRoutingModule
  ],
  declarations: [ComentariosDejadosPage]
})
export class ComentariosDejadosPageModule {}
