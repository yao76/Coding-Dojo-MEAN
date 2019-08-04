import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  addQuote(newQuote, _id) {
    console.log("In add quote service")
    console.log("ID: ", _id)
    return this._http.post("/api/quotes/" + _id, newQuote);
  }

  deleteAuthor(id) {
    return this._http.delete("/authors/" + id);
  }

  constructor(private _http: HttpClient) { }

  getAuthors(){
    return this._http.get("/authors");
  }

  addAuthor(newAuthor) {
    console.log("In add author service");
    return this._http.post("/authors", newAuthor);
  }

  getOneAuthorFromService(id) {
    return this._http.get("/authors/" + id)
  }

  getOneQuoteFromService(id, idx) {
    console.log("id service: ", id)
    return this._http.get(`/api/quotes/${id}/${idx}`)
  }

  updateAuthor(id, updatedFormInfo) {
    console.log("IN update author service, forminfo: " + updatedFormInfo.name + " id: " + id);
    return this._http.put("/authors/" + id, updatedFormInfo);
  }

  voteUpService(idx, id2){
    console.log("In voteup service")
    return this._http.put(`/quotes/voteup/${id2}/${idx}`, id2, idx);
  }
  voteDownService(idx, id2){
    console.log("In voteup service")
    return this._http.put(`/quotes/votedown/${id2}/${idx}`, id2, idx);
  }

  deleteQuoteService(id) {
    console.log("in delete quote service")
    console.log(id)
    return this._http.delete(`/quotes/${id}`);
  }

  updateQuoteService(id, updatedQuoteInfo) {
    return this._http.put("/quotes/" + id, updatedQuoteInfo);
  }
}

