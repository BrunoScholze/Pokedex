import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexListComponent } from './pokedex-list.component';

@NgModule({
  declarations: [PokedexListComponent],
  imports: [CommonModule],
  exports: [PokedexListComponent]  
})
export class PokedexListModule { }