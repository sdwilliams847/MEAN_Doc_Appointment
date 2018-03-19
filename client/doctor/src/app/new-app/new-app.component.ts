import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AppoinmentService } from '../appoinment.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-app',
  templateUrl: './new-app.component.html',
  styleUrls: ['./new-app.component.css']
})
export class NewAppComponent implements OnInit {
  private appointment:any;
  private errors: any;
  private loggedUser:any;
  private user:any;

  constructor(private _us:UserService, private _as:AppoinmentService, private _router:Router) { }

  init(){

    this.errors = []

  }

  register(){
    this._us.register(this.user,(data)=>{
      console.log("New APP Register function was called. "+this.user)
      localStorage.setItem("user",data._id)
      this.loggedUser = data;
      console.log("Here is the data", data)
      console.log(this.loggedUser);
    });
  }

  ngOnInit() {
    this.user = {
      name:""
    }
    this.appointment = {
      _user:"",
      complaint:"",
      date:"",
      time:"",
    }
    console.log(this.user);
    this.init()
    if(this._us.isValid()){
      this.user.name = prompt("Please enter your name")
      this.register();
    }

  }

  createApp(){
    console.log("this is This.User: ",this.user)
    console.log("this is This.loggedUser's ID: ",this.loggedUser._id)
    if (this.appointment.time < "08:00"){
      this.errors.push("Your appointment time must be between 8 AM and 5 PM.")
    }
    if (this.appointment.time > "17:00"){
      this.errors.push("Your appointment time must be between 8 AM and 5 PM.")
    }
    if (this.appointment.complaint.length < 9){
      this.errors.push("Your complaint must be at least 10 characters.")
    }

    this.appointment._user = this.loggedUser._id;
    console.log("Appointment prior to saving: ",this.appointment);
    this._as.create(this.appointment,(data)=>{
      if(data){
        console.log(data)
      } else {
        this._router.navigate(['dashboard']);
      }
    })
  }

  clear(){
    this.init();
  }

}
