import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    // this.getPokemon();
    // this.getAbilities();
    // this.heavyMetal();
    // this.rockHead();
    // this.sturdy();
    // this.getTypes();
  }

  getPokemon() {
    // let aron = this._http.get('https://pokeapi.co/api/v2/pokemon/304/');
    // aron.subscribe(data => console.log("Aron!", data));
    return this._http.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20');
  }

  getAbilities() {
    // let aron = this._http.get('https://pokeapi.co/api/v2/pokemon/304/');
    // // bulbasaur.subscribe(data => console.log("Bulbasaur's first ability is ", data["abilities"][0]["ability"]["name"]));
    // aron.subscribe(data => console.log(`Aron's abilities are ${data.abilities[0].ability.name} and ${data.abilities[1].ability.name} and ${data.abilities[2].ability.name}`));
    return this._http.get("https://pokeapi.co/api/v2/pokemon/304/")
  }

  getTypes() {
    let type = this._http.get('https://pokeapi.co/api/v2/pokemon/304/');
    type.subscribe(data => console.log(`Aron's types are ${data.types[0].type.name} and ${data.types[1].type.name}`));
  }

  heavyMetal() {
    let heavyMetalAbility = this._http.get("https://pokeapi.co/api/v2/ability/134/");
    heavyMetalAbility.subscribe(data => console.log(`${data.pokemon.length} pokemon have ${data.name} ability`))
  }

  rockHead() {
    let heavyMetalAbility = this._http.get("https://pokeapi.co/api/v2/ability/69/");
    heavyMetalAbility.subscribe(data => console.log(`${data.pokemon.length} pokemon have ${data.name} ability`))
  }

  sturdy() {
    let heavyMetalAbility = this._http.get("https://pokeapi.co/api/v2/ability/5/");
    heavyMetalAbility.subscribe(data => console.log(`${data.pokemon.length} pokemon have ${data.name} ability`))
  }
}
