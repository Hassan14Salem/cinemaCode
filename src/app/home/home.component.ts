import { Component, OnInit } from '@angular/core';
import { AllMovieTvService } from '../all-movie-tv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
allData:any[]=[]
tvs:any[]=[]
baseSrc:string = 'https://image.tmdb.org/t/p/w500'
  constructor(private _AllMovieTvService:AllMovieTvService) { }

  ngOnInit(): void {
    localStorage.setItem('currentPage','/home');
    this._AllMovieTvService.getData('movie').subscribe({
      next:(Response)=>{
this.allData = Response.results;
console.log(this.allData)
      }
    })
    this._AllMovieTvService.getData('tv').subscribe({
      next:(Response)=>{
        this.tvs = Response.results;
      }
    })
  }

}
