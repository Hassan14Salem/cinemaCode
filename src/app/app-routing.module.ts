import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { ItemsDetailsComponent } from './items-details/items-details.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvShowComponent } from './tv-show/tv-show.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'home' ,canActivate:[AuthGuard], component:HomeComponent},
  {path:'movies' ,canActivate:[AuthGuard], component:MoviesComponent},
  {path:'tv' ,canActivate:[AuthGuard], component:TvShowComponent},
  {path:'people' ,canActivate:[AuthGuard], component:PeopleComponent},
  {path:'itemsDetails/:media_type/:id' ,canActivate:[AuthGuard], component:ItemsDetailsComponent},
  {path:'peopledetails/:media_type/:id' ,canActivate:[AuthGuard], component:PeopleDetailsComponent},
  {path:"**" , component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
