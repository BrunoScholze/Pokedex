import { Component } from '@angular/core';
import { PokemonListService } from '../service/pokemon-list-service';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss']
})
export class PokedexListComponent {
  pokemonsList: any[] = []; 
  idActive!: number;
  pokemonType!: any;
  filter: string = '';
  
  constructor(private pokemonListService: PokemonListService){}

  ngOnInit(): void {
    this.getAllPokemonList();
  }

  search(event: any) {
    this.filter = event;
    console.log('te')
  }

  get filteredPokemons() {
    return this.pokemonsList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(this.filter.toLowerCase())
    );
  }

  getAllPokemonList(){
    this.pokemonListService.getAll().subscribe(
      (data) => {
        this.pokemonsList = data.results; 
      },
      (error) => {
        console.error('Erro ao obter a lista de Pokémons:', error);
      }
    );
  }
}
