import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AppoinmentService } from '../appoinment.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private search:String;
  private user:any;
  private loggedUser:any;
  private appointments: any;

  constructor(private _us:UserService, private _as:AppoinmentService, private _router:Router) { }

  register(){
    console.log("Dashboard Register function was called. "+this.user)
    this._us.register(this.user,(data)=>{
      localStorage.setItem("user",data._id)
      this.loggedUser = data;
      console.log(this.loggedUser)
    });
  }

  logout(){
    console.log("Someone clicked logout!")
    this._us.logout();
    this.ngOnInit()
  }

  init(){
    this.search = "";
    this.user = {
      name:""
    }
  }

  ngOnInit() {
    this.init()
    if(this._us.isValid()){
      this.user.name = prompt("Please enter your name")
      this.register();
    }
    this.appointments = []
    this._as.all((data)=>{
      for(let i =0;i<data.length;i++){
        this.appointments.push(data[i]);
      }
    });
  }
}
