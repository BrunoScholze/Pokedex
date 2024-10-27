import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app-pokedex-list',
    pathMatch: 'full',
  },
  {
    path: 'app-pokedex-list',
    component: PokedexListComponent,
  },
  {
    path: 'app-pokemon-card',
    component: PokemonCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}