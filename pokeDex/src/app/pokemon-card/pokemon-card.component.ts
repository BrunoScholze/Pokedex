import { Component, Input, ViewChild } from '@angular/core';
import { Pokemon } from '../model/pokemon';
import { PokemonInfoModalComponent } from '../modal/pokemon-info-modal.component';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;

  @ViewChild('pokemonInfoModal', {static: false})
  pokemonInfoModal!: PokemonInfoModalComponent;

  getPokemonIdByUrl(url: string ): number {
    const urlParts = url.split('/'); 
    const id = Number(urlParts[urlParts.length - 2]); 
    return id; 
  }

  capitalizeFirstLetter(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  openPokemonInfoModal(){
    this.pokemonInfoModal.openModal();
  }

}
