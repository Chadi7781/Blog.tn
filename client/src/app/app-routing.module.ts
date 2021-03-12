import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {HomeComponent} from "./components/home/home.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {RegisterComponent} from "./components/register/register.component";

const routes: Routes = [
  { path:'',
    component:HomeComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
