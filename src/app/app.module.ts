import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TvShowComponent } from './tv-show/tv-show.component';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ItemsDetailsComponent } from './items-details/items-details.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { LessNamePipe } from './less-name.pipe'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TvShowComponent,
    MoviesComponent,
    PeopleComponent,
   
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    NotFoundComponent,
    ItemsDetailsComponent,
    PeopleDetailsComponent,
    LessNamePipe 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , ReactiveFormsModule ,HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
