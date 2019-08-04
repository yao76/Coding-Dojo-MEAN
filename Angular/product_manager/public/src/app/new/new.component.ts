import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  newProduct: any;

  ngOnInit() {
    this.newProduct = {title: "", price: "", image: ""};
  }

  addProduct() {
    let obs = this._httpService.addProductService(this.newProduct);
    obs.subscribe(data => {
      console.log("Got data from post! ", data)
    })
    this.newProduct = {title: "", price: "", image: ""};
  }
}
