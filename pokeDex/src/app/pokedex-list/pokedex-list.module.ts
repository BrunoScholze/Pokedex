import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexListComponent } from './pokedex-list.component';
import { PoButtonModule, PoContainerModule, PoFieldModule, PoPageModule, PoTagModule } from '@po-ui/ng-components';
import { PokemonCardModule } from '../pokemon-card/pokemon-card.module';

@NgModule({
  declarations: [PokedexListComponent],
  imports: [
    CommonModule, 
    PoPageModule,
    PoContainerModule,
    PoTagModule,
    PoButtonModule,
    PoFieldModule,
    PokemonCardModule
    ],

  exports: [PokedexListComponent]  
})
export class PokedexListModule { }