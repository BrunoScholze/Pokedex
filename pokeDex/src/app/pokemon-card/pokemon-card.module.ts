import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './pokemon-card.component';
import { PokemonInfoModalModule } from '../modal/pokemon-info-modal.module';

@NgModule({
  declarations: [PokemonCardComponent],
  imports: [CommonModule, PokemonInfoModalModule],
  exports: [PokemonCardComponent]  
})
export class PokemonCardModule { }