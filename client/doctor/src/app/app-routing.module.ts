import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewAppComponent } from './new-app/new-app.component';

const routes: Routes = [
  { path:'', pathMatch:'full', component:DashboardComponent },
  { path:'newApp', component:NewAppComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
