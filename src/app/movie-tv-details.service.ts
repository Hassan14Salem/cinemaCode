import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieTvDetailsService {

  constructor(private _HttpClient:HttpClient) { } 

getDetais(media_type:string , movie_id:number):Observable<any>
{
 return this._HttpClient.get(`https://api.themoviedb.org/3/${media_type}/${movie_id}?api_key=64e8efbb7818bf4d009f2679e215ad31`)
}



}
