import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  newQuote: any;
  id: any;
  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params._id;
      console.log("ngoninit id: " + this.id)
    });
    this.newQuote = {content: "", votes: 0};
  }

  addQuote(){
    console.log("in add quote component");
    let obs = this._httpService.addQuote(this.newQuote, this.id);
    obs.subscribe(data=>{
      console.log("Got quote data from form! ", data);
    })

    this.newQuote = {content: "", votes: 0};
  }

}
