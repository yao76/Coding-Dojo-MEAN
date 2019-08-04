import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  activities: any;
  ngOnInit() {
    this.activities = this._httpService.getActivities()
    console.log("activities: " + this.activities);
  }

}
