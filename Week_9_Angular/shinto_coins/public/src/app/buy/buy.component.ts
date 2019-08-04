import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';


@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit{

  constructor(private _httpService: HttpService) { }

  answer: any;
  value: any;
  balance: any;
  ngOnInit() {
    this.value = this._httpService.getValue();
    this.balance = this._httpService.getBalance();
  }
  buyCoins(){
    // console.log(this.answer);
    this._httpService.buy(this.answer)

    this.balance = this._httpService.getBalance();
    this.value = this._httpService.getValue();
    console.log("buy value"+ this.value)
    console.log("buy balance"+ this.balance)
  }
}
