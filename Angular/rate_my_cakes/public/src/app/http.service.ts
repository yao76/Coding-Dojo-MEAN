import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    // this.getTasks();
    // this.getOneTask();
  }

  getCakes() {
    // // our http response is an Observable, store it in a variable
    // let tempObservable = this._http.get('/tasks');
    // // subscribe to the Observable and provide the code we would like to do with our data from the response
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/cakes');
  }

  getOneCake(_id) {
    // // our http response is an Observable, store it in a variable
    // let tempObservable = this._http.get('/tasks/"5d24b28d93717518341852b3"');
    // // subscribe to the Observable and provide the code we would like to do with our data from the response
    // tempObservable.subscribe(data => console.log("Got our task!", data));

    return this._http.get("/cakes/" + _id);
  }

  addCake(newCake) {
    console.log("In add cake");
    console.log(newCake);
    return this._http.post('/cakes', newCake);
  }

  addReview(newReview, cakeId) {
    console.log("In service addReview");
    console.log("CakeId Service:" + cakeId);
    console.log(newReview);
    return this._http.post(`/cakes/${cakeId}`, newReview);
  }


  getCakesByBaker(baker) {
    return this._http.get("/cakes/baker/" + baker);
  }
  // editTaskService(updatedforminfo, id) {
  //   console.log("In edit task service");
  //   return this._http.put('/tasks/' + id, updatedforminfo);
  // }

  // removeTaskService(id) {
  //   console.log("In remove task service")
  //   return this._http.delete('/tasks/' + id)
  // }
}
