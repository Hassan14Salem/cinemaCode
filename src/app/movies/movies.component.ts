import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllMovieTvService } from '../all-movie-tv.service';
import { MovieTvDetailsService } from '../movie-tv-details.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private _AllMovieTvService:AllMovieTvService ) { }
getMovie:any[]=[]
baseSrc:string = 'https://image.tmdb.org/t/p/w500'

  ngOnInit(): void {
    localStorage.setItem('currentPage', '/movies')
    this._AllMovieTvService.getData('movie').subscribe({
      next:(Response)=>{
this.getMovie = Response.results
      }
    })




  }

}
