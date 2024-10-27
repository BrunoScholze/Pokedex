import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexListComponent } from './pokedex-list.component';
import { PoContainerModule, PoPageModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [PokedexListComponent],
  imports: [
    CommonModule, 
    PoPageModule,
    PoContainerModule
    ],

  exports: [PokedexListComponent]  
})
export class PokedexListModule { }