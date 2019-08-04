import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  id: any;
  editAuthor: any;
  name: any;


  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      // console.log(params['_id'])
      this.id = params["_id"];
      console.log("ngoninit id: "+this.id)
    });
    // this.name = {name: ""}
    this.editAuthor= {name: ""};

    this.getOneAuthor(this.id);
  }


  getOneAuthor(id) {
    let obs = this._httpService.getOneAuthorFromService(id);
    obs.subscribe(data => {
      this.editAuthor = data;
      console.log("Got one author! "+this.editAuthor.name);
    })
  }

  updateAuthor() {
    console.log("In update: " + this.editAuthor.name)
    let obs = this._httpService.updateAuthor(this.id, this.editAuthor)
    obs.subscribe(data => {
      // this.selected_author = {name: ""};
      // console.log(this.editAuthor)
      console.log(data);
    })
  }

  
}
