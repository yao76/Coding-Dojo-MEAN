import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';


@Component({
  selector: 'app-cairo',
  templateUrl: './cairo.component.html',
  styleUrls: ['./cairo.component.css']
})
export class CairoComponent implements OnInit {
  weather;
  temp;
  maxTemp;
  minTemp;
  humidity;
  wind;
  description;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    let obs = this._httpService.getWeatherForCity('cairo');
    obs.subscribe(data => {
      console.log(data);
      this.temp = Math.round(data.main.temp);
      this.maxTemp = Math.round(data.main.temp_max);
      this.minTemp = Math.round(data.main.temp_min);
      this.humidity = Math.round(data.main.humidity);
      this.description = data.weather[0].description;
      console.log(this.description);
    })
  }

}
