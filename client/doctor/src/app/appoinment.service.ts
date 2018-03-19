import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppoinmentService {

  constructor(private _http:HttpClient) { }

  create(appointment,cb){
    this._http.post('/server/appointments/create',appointment)
    .subscribe(data=>cb(data));
  }

  all(cb){
    this._http.get('/server/appointments/all')
    .subscribe(data=>cb(data));
  }
}