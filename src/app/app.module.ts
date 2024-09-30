import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { StudentlistComponent } from './components/studentlist/studentlist.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentlistComponent,
    EmployeelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
