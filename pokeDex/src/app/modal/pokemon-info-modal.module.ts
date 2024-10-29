import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoModalModule } from '@po-ui/ng-components';
import { PokemonInfoModalComponent } from './pokemon-info-modal.component';

@NgModule({
  declarations: [PokemonInfoModalComponent],
  imports: [
    CommonModule, 
    PoModalModule
    ],

  exports: [PokemonInfoModalComponent]  
})
export class PokemonInfoModalModule { }