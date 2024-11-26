import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComentariosDejadosPage } from './comentarios-dejados.page';

const routes: Routes = [
  {
    path: '',
    component: ComentariosDejadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComentariosDejadosPageRoutingModule {}
