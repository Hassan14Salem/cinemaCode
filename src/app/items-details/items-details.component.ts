import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieTvDetailsService } from '../movie-tv-details.service';

@Component({
  selector: 'app-items-details',
  templateUrl: './items-details.component.html',
  styleUrls: ['./items-details.component.scss']
})
export class ItemsDetailsComponent implements OnInit {
//this service is for display movie & tv details
//used in movie & tv
  constructor( private _MovieTvDetailsService:MovieTvDetailsService , private _ActivatedRoute:ActivatedRoute) { }
  getMovieDetails:any;
  person:any;
  baseSrc:string = 'https://image.tmdb.org/t/p/w500'
  ngOnInit(): void {
    let { media_type , id  } = this._ActivatedRoute.snapshot.params;

    this._MovieTvDetailsService.getDetais(media_type , id).subscribe({
      next:(Response)=>{
this.getMovieDetails = Response
console.log(this.getMovieDetails)
      }
      
    })

    this._MovieTvDetailsService.getDetais(media_type , id).subscribe({
      next:(Response)=>{
this.getMovieDetails = Response
this.person = Response
console.log(this.getMovieDetails)
      }
    
    })
    localStorage.setItem('currentPage',`/itemsDetails/${media_type}/${id}`)

  }

}
