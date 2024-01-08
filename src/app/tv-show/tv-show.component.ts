import { Component, OnInit } from '@angular/core';
import { AllMovieTvService } from '../all-movie-tv.service';
import { MovieTvDetailsService } from '../movie-tv-details.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss']
})
export class TvShowComponent implements OnInit {
getTV:any[]=[]
baseSrc:string = 'https://image.tmdb.org/t/p/w500'
  constructor(private _AllMovieTvService:AllMovieTvService , private _MovieTvDetailsService:MovieTvDetailsService) { }

  ngOnInit(): void {
    localStorage.setItem('currentPage', '/tv')
this._AllMovieTvService.getData('tv').subscribe({
  next:(Response)=>{
    this.getTV=Response.results
  }
})
  }

}
