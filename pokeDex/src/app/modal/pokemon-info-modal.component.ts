import { Component, ViewChild } from '@angular/core';
import { PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'pokemon-info-modal',
  templateUrl: './pokemon-info-modal.component.html',
  styleUrls: ['./pokemon-info-modal.component.scss']
})
export class PokemonInfoModalComponent {

  @ViewChild('pokemonInfoModal', {
    static: true
  })
  
  pokemonInfoModalElement!: PoModalComponent

  constructor(){

  }

  closeModal(){
    this.pokemonInfoModalElement.close();
  }

  openModal(){
    this.pokemonInfoModalElement.open();
  }
}
