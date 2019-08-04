import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  newTask: any;
  tasks : any;
  task: any;
  editTask : any;
  deleteTask: any;
  

  constructor(private _httpService: HttpService) { }
  // ngOnInit will run when the component is initialized, after the constructor method.
  ngOnInit() {
    // this.getTasksFromService();
    this.newTask = { title: "", description: ""}
    this.editTask = { title: "", description: ""}

  }

  onSubmit() {
    console.log("on submit");
    // Code to send off the form data (this.newTask) to the Service
    // ...
    // Reset this.newTask to a new, clean object.
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log("Got data from post", data);
      this.newTask = { title: "", description: "" }
    })
  }

  getTasksFromService() {
    console.log("In get tasks from service");
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data)
      // In this example, the array of tasks is assigned to the key 'tasks' in the data object. 
      // This may be different for you, depending on how you set up your Task API.
      this.tasks = data;
    });
  }

  editTaskForm(idx) {
    console.log("In edit form");
    // let observable = this._httpService.getOneTask(this._id);
    // observable.subscribe(data => {
    //   console.log("Got our single task!", data['title']);
    //   this.task = data;
    // })
    this.task = this.tasks[idx];
    this.editTask = { title: this.task.title, description: this.task.description }
    console.log(this.task);
  }

  processEditTask(){
    console.log("In process edit task");
    let observable = this._httpService.editTaskService(this.editTask, this.task._id); 
    observable.subscribe(data => {
      console.log("~Edit~");
      console.log(this.editTask);
      this.editTask = { title: "", description: "" }
      
      console.log(data);
    })
  }

  deleteTaskForm(idx) {
    console.log("In delete task component")
    this.deleteTask = this.tasks[idx];
    let observable = this._httpService.removeTaskService(this.deleteTask._id);
    observable.subscribe(data => {
      console.log(data);
    })
  }
}