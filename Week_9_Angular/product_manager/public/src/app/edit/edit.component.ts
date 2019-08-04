import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: any;
  editProduct: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      // console.log(params['_id'])
      console.log(params.id)
      this.id = params.id;
      console.log("ngoninit id: "+this.id)
    });

    this.editProduct= {title: "", price: "", image: ""};

    this.getOneProduct(this.id);
  }

  getOneProduct(id) {
    let obs = this._httpService.getOneProductFromService(id);
    obs.subscribe(data => {
      console.log("Get Product! ", data);
      this.editProduct = data;
    })
  }

  updateProduct() {
    console.log("in update comp");
    //finishh thissssssssssss
    let obs = this._httpService.updateProductService(this.id, this.editProduct);
    obs.subscribe(data => {
      console.log(data);
    })
  }


}
