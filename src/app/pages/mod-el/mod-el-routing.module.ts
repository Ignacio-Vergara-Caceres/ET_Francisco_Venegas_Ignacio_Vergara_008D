import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModElPage } from './mod-el.page';

const routes: Routes = [
  {
    path: '',
    component: ModElPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModElPageRoutingModule {}
