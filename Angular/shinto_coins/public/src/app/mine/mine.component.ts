import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit{
  balance;
  answer:any;
  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.balance = this._httpService.balance;
    this.answer = "";
    console.log(this._httpService.balance);
  }
  
  mineCoins() {
    console.log(this.answer);
    console.log(this._httpService.balance);
    if(this.answer == 8) {
      this._httpService.mine();
      console.log(this._httpService.balance);
      console.log(this._httpService.activities);
    }
  }

}
