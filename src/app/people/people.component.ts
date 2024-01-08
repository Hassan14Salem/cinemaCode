import { Component, OnInit } from '@angular/core';
import { AllMovieTvService } from '../all-movie-tv.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  baseSrc:string = 'https://image.tmdb.org/t/p/w500'
getPerson:any[]=[]
  constructor(private _AllMovieTvService:AllMovieTvService) { }

  ngOnInit(): void {
    localStorage.setItem('currentPage', '/people')
    this._AllMovieTvService.getData('person').subscribe({
      next:(Response)=>{
        this.getPerson = Response.results
      }
    })

  }

}
