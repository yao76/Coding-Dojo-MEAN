import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  answer: any;
  value: any;
  balance: any;
  ngOnInit() {
    this.value = this._httpService.getValue();
    this.balance = this._httpService.getBalance();
  }
  sellCoins(){
    // console.log(this.answer);
    this._httpService.sell(this.answer)

    this.balance = this._httpService.getBalance();
    this.value = this._httpService.getValue();
    console.log("sell value"+ this.value)
    console.log("sell balance"+ this.balance)
  }
}

