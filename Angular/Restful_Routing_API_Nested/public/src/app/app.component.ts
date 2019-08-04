import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private _httpService: HttpService) { }
  // ngOnInit will run when the component is initialized, after the constructor method.
  ngOnInit() {
    // this.getTasksFromService();

  }
  // Set the attribute tasks to be an array.
  tasks : any;
  task: any;

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data)
      // In this example, the array of tasks is assigned to the key 'tasks' in the data object. 
      // This may be different for you, depending on how you set up your Task API.
      this.tasks = data;
    });
  }

  getSingleTask(idx) {
    // let observable = this._httpService.getOneTask(this._id);
    // observable.subscribe(data => {
    //   console.log("Got our single task!", data['title']);
    //   this.task = data;
    // })
    this.task = this.tasks[idx];
  }
}