import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ninja Gold';
  gold: number;
  casino_gold = Math.floor(Math.random()*11)+10;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.gold = 0;
    this.events = [];
  }


  events : Array<any>;
  css = "";


  onButtonClickParam(str: string): void {
    console.log(`Click event is working with num param: ${str}`);
    if (str == "farm") {
      let farm_gold = Math.floor(Math.random()*11)+10;
      this.gold += farm_gold;
      console.log(this.gold);
      this.events.push({message:`Entered the casino and earned ${ farm_gold} gold`, color:"text-success"});
    }
    if (str == "cave") {
      let cave_gold = Math.floor(Math.random()*6)+5;
      this.gold += cave_gold;
      console.log(this.gold);
      this.events.push({message:`Entered the casino and earned ${ cave_gold} gold`, color:"text-success"});
    }
    if (str == "house") {
      let house_gold = Math.floor(Math.random()*4)+2;
      this.gold += house_gold;
      console.log(this.gold);
      this.events.push({message:`Entered the casino and earned ${ house_gold} gold`, color:"text-success"});
    }
    if (str == "casino") {
      let casino_gold = Math.floor(Math.random()*101)-50;
      this.gold += casino_gold;
      console.log(this.gold);
      if (casino_gold >= 0) {

        this.events.push({message:`Entered the casino and earned ${ casino_gold} gold`, color:"text-success"});

      } else {
        var gold_earned = Math.abs(casino_gold);
        this.events.push({message:`Entered the casino and lost ${ gold_earned} gold`, color:"text-danger"});
        
      }

    }
    
  }
}
