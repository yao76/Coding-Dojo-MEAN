import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

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

  deleteOneProduct(id) {
    let obs = this._httpService.deleteProduct(id);
    obs.subscribe(data => {
      console.log("Succesfully deleted");
      this.getAllProducts();
    })
  }
}
