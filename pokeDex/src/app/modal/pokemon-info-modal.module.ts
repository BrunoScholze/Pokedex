import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoModalModule, PoTagModule } from '@po-ui/ng-components';
import { PokemonInfoModalComponent } from './pokemon-info-modal.component';

@NgModule({
  declarations: [PokemonInfoModalComponent],
  imports: [
    CommonModule, 
    PoModalModule,
    PoTagModule
    ],

  exports: [PokemonInfoModalComponent]  
})
export class PokemonInfoModalModule { }