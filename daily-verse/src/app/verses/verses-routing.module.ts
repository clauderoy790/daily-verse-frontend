import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VersesPage } from './verses.page';

const routes: Routes = [
  {
    path: '',
    component: VersesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VersesPageRoutingModule {}
