import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerQrPage } from './ver-qr.page';

const routes: Routes = [
  {
    path: '',
    component: VerQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerQrPageRoutingModule {}
