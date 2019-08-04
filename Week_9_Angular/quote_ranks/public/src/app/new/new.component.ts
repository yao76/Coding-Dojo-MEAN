import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  newAuthor: any;
  ngOnInit() {
    this.newAuthor = {name: ""};
  }

  addAuthor() {
    let obs = this._httpService.addAuthor(this.newAuthor);
    obs.subscribe(data=> {
      console.log("Got data from post!", data);
    })
    this.newAuthor = {name: ""};
  }

}
