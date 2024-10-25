import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokedexListModule} from '/'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app-pokedex-list',
    pathMatch: 'full',
  },
  {
    path: 'app-pokedex-list',
    loadChildren: () =>
      import('./pokedex-list/').then(
        (m) => m.PokedexListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}