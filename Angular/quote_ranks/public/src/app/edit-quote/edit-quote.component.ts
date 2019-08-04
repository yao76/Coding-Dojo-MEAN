import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-quote',
  templateUrl: './edit-quote.component.html',
  styleUrls: ['./edit-quote.component.css']
})
export class EditQuoteComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  id: any;
  editQuote: any;
  idx: any;
  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      // console.log(params['_id'])
      this.id = params["_id"];
      this.idx = params["idx"];
      console.log("ngoninit id: "+this.id)
      console.log("ngoninit idx: "+this.idx)
    });
    // this.name = {name: ""}
    this.editQuote = {content: "", votes: 0};

    this.getOneQuote(this.id, this.idx);
  }

  getOneQuote(id,idx) {
    console.log("one quote ID: ", id);
    console.log("one quote idx: ", idx)
    let obs = this._httpService.getOneQuoteFromService(id, idx);
    obs.subscribe(data=> {
      console.log("Get One Quote data: ",data)
      console.log(data.data[0].quotes[idx])
      this.editQuote = data.data[0].quotes[idx];
      // this.editQuote = data;
      console.log("this.editQuote! ", this.editQuote)
    })
  }

  updateQuote() {
    console.log("in update quote comp ", this.id)
    let obs = this._httpService.updateQuoteService(this.id, this.editQuote);
    obs.subscribe(data => {
      console.log("update quote comp: ", data);
    })
  }

}
