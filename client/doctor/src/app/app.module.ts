import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewAppComponent } from './new-app/new-app.component';
import { UserService } from './user.service';
import { AppoinmentService } from './appoinment.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    AppoinmentService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
