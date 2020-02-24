import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Employee } from './Component/employeeComponent'
import { from } from 'rxjs';
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from "@angular/forms";
import { Login } from "./Security/login";
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
  {
    path: 'Login',
    component: Login,
    data: { title: 'Login Page' }
  },
];

@NgModule({
  declarations: [
    // AppComponent
    Employee,
    Login

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),

  ],
  exports:[RouterModule],

  providers: [],
  // bootstrap: [AppComponent]
  //bootstrap: [Employee]
  bootstrap: [Login]
})
export class AppModule { }
