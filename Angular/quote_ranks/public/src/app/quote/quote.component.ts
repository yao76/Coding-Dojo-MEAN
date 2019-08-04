import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';



@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  id: any;
  author: any;

  ngOnInit() {
    this.author = { name: "" };
    this._route.params.subscribe((params: Params) => {
      console.log(params['_id'])
      this.id = params._id;
      console.log("ngoninit id: " + this.id)
    });


    this.getOneAuthor();
  }

  getOneAuthor() {
    let obs = this._httpService.getOneAuthorFromService(this.id);
    obs.subscribe(data => {
      this.author = data;
      console.log(this.author);
    })
  }

  voteUp(idx, id) {
    console.log("in vote up");
    console.log(idx);

    let obs = this._httpService.voteUpService(idx, id);
    obs.subscribe(data => {
      console.log("data ", data);
      this.getOneAuthor();
    })
  }

  voteDown(idx, id) {
    console.log("in vote up");
    console.log(idx);

    let obs = this._httpService.voteDownService(idx, id);
    obs.subscribe(data => {
      console.log("data ", data);
      this.getOneAuthor();
    })
  }

  deleteQuote(id) {
    console.log('delete quote comp');
    let obs = this._httpService.deleteQuoteService(id);
    obs.subscribe(data => {
      console.log('deleted quote!', data);
      this.getOneAuthor();
    })
  }


}
