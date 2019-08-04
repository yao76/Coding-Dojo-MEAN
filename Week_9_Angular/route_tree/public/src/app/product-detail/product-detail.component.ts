import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product_id : any;
  constructor( 
    private _route: ActivatedRoute,
    private _router: Router) { }

    ngOnInit(){
      // note the use of .parent
      this._route.params.subscribe(params => this.product_id = params.id);
  }

}
