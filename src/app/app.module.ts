import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MoviesModule } from './movies/movies.module';
// import { MovieDetailsModule } from './movies/movie-details/movie-details.module';

import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MoviesModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    InputSwitchModule,
    // MovieDetailsModule
    // MovieDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
