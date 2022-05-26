import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NEW_TESTAMENT_BOOKS, OLD_TESTAMENT_BOOKS } from '../bible.service';
import { ChaptersPage } from '../chapters/chapters.page';
import { BiblePage } from './bible.page';

const routes: Routes = [
  {
    path: '',
    component: BiblePage,
  },
  {
    path: 'old',
    data: OLD_TESTAMENT_BOOKS,
    component: ChaptersPage,
  },
  {
    path: 'new',
    data: NEW_TESTAMENT_BOOKS,
    component: ChaptersPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BiblePageRoutingModule {}
