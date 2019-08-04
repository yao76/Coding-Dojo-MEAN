import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  // transaction: any;
  constructor(private _httpService: HttpService,private route: ActivatedRoute) { }
  
  ngOnInit() {
    
  }


  // getTrans(id) {
  //   this.transaction = this._httpService.getTransaction(id);
  //   // console.log(this.transaction);
  // }

}
