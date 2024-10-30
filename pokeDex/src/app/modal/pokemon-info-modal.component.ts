import { Component, Input, input, ViewChild } from '@angular/core';
import { PoModalComponent } from '@po-ui/ng-components';
import { Pokemon } from '../model/pokemon';
import { PokemonListService } from '../service/pokemon-list-service';

@Component({
  selector: 'pokemon-info-modal',
  templateUrl: './pokemon-info-modal.component.html',
  styleUrls: ['./pokemon-info-modal.component.scss']
})
export class PokemonInfoModalComponent {
  @Input() pokemon!: Pokemon;
  
  @ViewChild('pokemonInfoModal', {
    static: true
  })
  
  pokemonInfoModalElement!: PoModalComponent
  pokemonType!: Array<any>;
  pokemonWeight: number = 0;
  pokemonHeight: number = 0;
  pokemonId: number = 0;

  constructor(private pokemonListService: PokemonListService){

  }

  closeModal(){
    this.pokemonInfoModalElement.close();
  }

  openModal(){
    this.pokemonInfoModalElement.open();
    const pokemoId = this.getPokemonIdByUrl(this.pokemon.url)
    this.getPokemonInfo(pokemoId)
    console.log(this.pokemon)
  }

  getPokemonIdByUrl(url: string ): number {
    const urlParts = url.split('/'); 
    const id = Number(urlParts[urlParts.length - 2]); 
    this.pokemonId = id;
    return id; 
  }

  getPokemonInfo(id: number) {
    this.pokemonListService.goTo(id).subscribe(
      (data) => {
        this.pokemonType = data.types.map((typeInfo: any) => typeInfo.type.name);
        this.pokemonHeight = data.height;
        this.pokemonWeight = data.weight;
      },
      (error) => {
        console.error('Erro ao obter a Info do Pokémon:', error);
      }
    );
  }

  capitalizeFirstLetter(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  getTagColor(type: string): string {
    switch (type) {
      case 'fire':
        return 'rgb(255, 69, 0)'; // Fogo: laranja avermelhado
      case 'water':
        return 'rgb(30, 144, 255)'; // Água: azul claro
      case 'grass':
        return 'rgb(124, 252, 0)'; // Grama: verde vivo
      case 'poison':
        return 'rgb(148, 0, 211)'; // Veneno: roxo
      case 'flying':
        return 'rgb(135, 206, 235)'; // Voador: azul céu
      case 'bug':
        return 'rgb(173, 255, 47)'; // Inseto: verde amarelado
      case 'electric':
        return 'rgb(255, 255, 0)'; // Elétrico: amarelo
      case 'dragon':
        return 'rgb(106, 90, 205)'; // Dragão: azul violeta
      case 'normal':
        return 'rgb(192, 192, 192)'; // Normal: cinza claro
      default:
        return 'rgb(128, 128, 128)'; // Padrão: cinza médio
    }
  }

  formatHeight(height: number): string {
    return (height / 10).toFixed(1) + 'm'; 
  }

  formatWeight(weight: number): string {
    return (weight / 10).toFixed(1) + 'kg'; // Divide por 10 e formata com uma casa decimal
  }
  
}
