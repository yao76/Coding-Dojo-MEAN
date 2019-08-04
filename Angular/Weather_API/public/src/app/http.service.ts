import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient){}

  getWeatherForCity(city) {
    console.log(city);
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=c905c4f4aea05fba5cce13591602f180&units=imperial`)
  }
}
