import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {

  constructor(private route: ActivatedRoute,private http: HttpClient) { }

  pokemon: any;

  name: string = "";

  sprites: any[] = [];

  moves: any[] = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log('id es:', id);
      this.getPokemon(id);
    });
  }

  getPokemon(id: string) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    this.http.get(url).subscribe((response: any) => {
      this.pokemon = response;
      this.getStandardSprites(this.pokemon.sprites);
      this.get3Moves(this.pokemon.moves);
      this.name = this.pokemon.name; 
    });
  }

  getStandardSprites(sprites: any){     
      Object.entries(sprites).filter(([key, value]) => {
        if(key.endsWith('_default') || key.endsWith('shiny') ){
          this.sprites.push(value);
        }
      });
  }

  get3Moves(moves: any){
    this.moves = moves.slice(0,3);
  }

}

