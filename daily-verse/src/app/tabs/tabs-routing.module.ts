import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home-routing.module').then(
            (m) => m.HomePageRoutingModule
          ),
      },
      {
        path: 'bible',
        loadChildren: () =>
          import('../bible/bible-routing.module').then(
            (m) => m.BiblePageRoutingModule
          ),
      },
      {
        path: 'favorites',
        loadChildren: () =>
          import('../favorites/favorites-routing.module').then(
            (m) => m.FavoritesPageRoutingModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
