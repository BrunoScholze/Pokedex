import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexListComponent } from './pokedex-list.component';
import { PoButtonModule, PoContainerModule, PoFieldModule, PoPageModule, PoTagModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [PokedexListComponent],
  imports: [
    CommonModule, 
    PoPageModule,
    PoContainerModule,
    PoTagModule,
    PoButtonModule,
    PoFieldModule
    ],

  exports: [PokedexListComponent]  
})
export class PokedexListModule { }