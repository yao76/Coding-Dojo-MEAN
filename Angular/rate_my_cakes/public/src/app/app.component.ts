import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private _httpService: HttpService){}
  
  title = 'Rate my Cakes';
  newCake: any;
  allCakes: any;
  selectedCake: any;
  newReview = {rating:"", comment:""};
  avgRating: any;
  cakesByBakersFound: any;
  searched = false;
  clicked = false;
  
  ngOnInit() {
    // this.newCake = {baker: "", rating:"", image:"" };
    this.getCakesFromService();
    this.newCake = {baker: "", image: ""}
  }

  getCakesFromService() {
    let observable = this._httpService.getCakes();
    observable.subscribe(data => {
      console.log("Got our cakes!", data)
      this.allCakes = data;
      this.allCakes.reverse();
    })
  }

  newCakeSubmit() {
    let observable = this._httpService.addCake(this.newCake);
    observable.subscribe(data => {
      console.log("Got data from post", data);
    })
    this.newCake = { baker: "", image: "" }
    this.getCakesFromService();
  }

  cakeInfo(idx) {
    this.clicked = true;
    this.selectedCake = this.allCakes[idx];
    var sum = 0;
    for(var i = 0; i < this.selectedCake.reviews.length; i++) {
      sum += this.selectedCake.reviews[i].rating;
    }

    this.avgRating = sum/this.selectedCake.reviews.length;
  }

  searchedCakeInfo(idx) {
    this.clicked = true;
    this.selectedCake = this.cakesByBakersFound[idx];
    var sum = 0;
    for(var i = 0; i < this.selectedCake.reviews.length; i++) {
      sum += this.selectedCake.reviews[i].rating;
    }

    this.avgRating = sum/this.selectedCake.reviews.length;
  }

  newReviewSubmit(cakeId) {
    console.log(cakeId);
    console.log("this.newReview: " + this.newReview)
    let observable = this._httpService.addReview(this.newReview, cakeId);
    observable.subscribe(data => {
      console.log("new review")
    })
    this.newReview = {rating:"", comment:""};
    this.getCakesFromService();
  }

  findByBaker(bakerName) {
    console.log("BakerNameComp " + bakerName);
    let observable = this._httpService.getCakesByBaker(bakerName);
    observable.subscribe(data => {
      // console.log("Got bakers from post", data);
      this.cakesByBakersFound = data;
      this.cakesByBakersFound.reverse();
      console.log(this.cakesByBakersFound);
      this.searched = true;
      this.selectedCake = {};
      this.avgRating = "";
      this.clicked = false;
    })
  }
}
