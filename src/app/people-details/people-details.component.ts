import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieTvDetailsService } from '../movie-tv-details.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {
  // this service is for display people details 
  // used in people.ts
getPeople:any;
baseSrc:string = 'https://image.tmdb.org/t/p/w500'

  constructor(private _MovieTvDetailsService:MovieTvDetailsService,private _ActivatedRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    let { media_type , id  } = this._ActivatedRoute.snapshot.params;

this._MovieTvDetailsService.getDetais(media_type , id).subscribe({
  next:(Response)=>{
this.getPeople=Response;
console.log(this.getPeople)
  }
})    
localStorage.setItem('currentPage',`/peopledetails/${media_type}/${id}`)

  }

}
