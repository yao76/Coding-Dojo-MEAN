import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  deleteAuthor(id) {
    return this._http.delete("/authors/" + id);
  }

  constructor(private _http: HttpClient) { }

  getAuthors(){
    return this._http.get("/authors");
  }

  addAuthor(newAuthor) {
    return this._http.post("/authors", newAuthor);
  }

  getOneAuthorFromService(id) {
    return this._http.get("/authors/" + id)
  }

  updateAuthor(id, updatedFormInfo) {
    console.log("IN update author service, forminfo: " + updatedFormInfo.name + " id: " + id);
    return this._http.put("/authors/" + id, updatedFormInfo);
  }
}

