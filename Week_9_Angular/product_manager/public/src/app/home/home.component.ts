import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  allProducts: any;

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(){
    let obs = this._httpService.getAllProductsService();
    obs.subscribe(data => {
      console.log(data);
      this.allProducts = data;
    })
  }

}
