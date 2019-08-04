import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  

  addProductService(newProduct) {
    return this._http.post("/api/products", newProduct);
  }

  getAllProductsService(){
    return this._http.get("/api/products");
  }

  getOneProductFromService(id) {
    console.log("In service")
    console.log(id);
    return this._http.get("/api/products/" + id);
  }

  updateProductService(id, editProduct) {
    console.log("In update service: ", editProduct);
    return this._http.put("/api/products/" + id, editProduct);
  }

  deleteProduct(id: any) {
    return this._http.delete("/api/products/" + id)
  }

  constructor(private _http: HttpClient){}
}
