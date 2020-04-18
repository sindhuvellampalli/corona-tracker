import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from '../app/Dashboard/dashboard/dashboard.component'


const routes: Routes = [
  {
    path: '', component: DashboardComponent, 
  },
  {
    path:"**", component:DashboardComponent
  }
  // {
  //   path:'',redirectTo:'/dashboard',pathMatch:'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
