import { Component } from '@angular/core';
import { PokemonListService } from '../service/pokemon-list-service';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss']
})
export class PokedexListComponent {
  pokemonsList: any[] = []; 

  constructor(private pokemonListService: PokemonListService){}

  ngOnInit(): void {
    this.pokemonListService.getAll().subscribe(
      (data) => {
        this.pokemonsList = data.results; 
        console.log(this.pokemonsList)
      },
      (error) => {
        console.error('Erro ao obter a lista de Pokémons:', error);
      }
    );
  }

  getPokemonIdByUrl(url: string ): number {
    const urlParts = url.split('/'); 
    const id = Number(urlParts[urlParts.length - 2]); 
    console.log(id)
    return id; 
  }

}
