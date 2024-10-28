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

  getPokemonIdByUrl(url: string ): number {
    const urlParts = url.split('/'); 
    const id = Number(urlParts[urlParts.length - 2]); 
    this.idActive = id;
    return id; 
  }

  getPokemonInfo(id:number){
    this.pokemonListService.goTo(id).subscribe(
      (data) => {
        this.pokemonType = data.types; 
        console.log(this.pokemonType)
      },
      (error) => {
        console.error('Erro ao obter a Info do Pokémon:', error);
      }
    );
  }

  capitalizeFirstLetter(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
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
