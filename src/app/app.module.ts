import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from '../login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from '../home/home.component';
import {EntertainmentComponent} from "../entertainment/entertainment.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {BooksComponent} from "../books/books.component";

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EntertainmentComponent
    BooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
