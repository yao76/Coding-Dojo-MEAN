import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  allAuthors: any;

  ngOnInit() {
    this.getAllAuthors();
  }
  getAllAuthors() {
    let obs = this._httpService.getAuthors();
    obs.subscribe(data => {
      console.log("Home compoenent get all authors: ",data);
      this.allAuthors = data;
    })
  }
  deleteOneAuthor(id) {
    console.log(id);
    console.log("In delete comp")
    let obs = this._httpService.deleteAuthor(id);
    obs.subscribe(data => {
      console.log("successfully deleted");
      this.getAllAuthors();
    })
  }

}
