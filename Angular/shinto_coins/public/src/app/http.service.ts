import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  id = 0;
  activities = [];
  balance = 0;
  value = 1;
  transaction: any;

  constructor(private _http: HttpClient) { }
  mine() {
    console.log("in mine")
    console.log("balance before:"+ this.balance);
    this.balance += 1;
    this.value += 1;
    console.log("balance after: " + this.balance);
    let obj = {
      id: this.id+= 1,
      action: "Mined",
      amount: 1,
      value: this.value
    };
    this.activities.push(obj);
  }

  buy(amount:number) {
    console.log("in buy")
    this.balance += amount;
    this.value += amount;
    console.log(this.balance);
    let obj = {
      id: this.id+= 1,
      action: "Bought",
      amount: amount,
      value: this.value
    };
    this.activities.push(obj);
  }

  sell(amount: number) {
    console.log("in sell");
    console.log("sell amount: "+ amount);

    if(amount <= this.balance) {
      this.balance -= amount;
      this.value -= amount;
      let obj = {
        id: this.id+= 1,
        action: "Sold",
        amount: amount,
        value: this.value
      };
      this.activities.push(obj);
    } else {
      console.log("Can't sell this amount");
    }
  }

  getBalance() {
    return this.balance;
  }

  getValue() {
    return this.value;
  }

  getActivities() {
    return this.activities;
  }

  getTransaction(id) {
    this.transaction = this.activities.find(trans => trans.id == id);
  }
  
}
