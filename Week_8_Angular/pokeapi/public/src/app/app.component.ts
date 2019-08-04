import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title: string;
  pokes = [];
  abilities = [];
  
  constructor(private _httpService: HttpService){}

  ngOnInit() {
    this.getPokemonFromService();
    this.getAbilitiesFromService();
    this.title = "Pokemon!";
  }
  getAbilitiesFromService() {
    let aron = this._httpService.getAbilities();
    // bulbasaur.subscribe(data => console.log("Bulbasaur's first ability is ", data["abilities"][0]["ability"]["name"]));
    aron.subscribe(data => {
      console.log("Aron's abilities are ${data.abilities[0].ability.name}");
      this.abilities = data.abilities;
    });
  }

  
  getPokemonFromService(){
    let aron = this._httpService.getPokemon();
    aron.subscribe(data => {
      console.log("All Pokemon!", data);
      this.pokes = data.results;

    });
  }

}
