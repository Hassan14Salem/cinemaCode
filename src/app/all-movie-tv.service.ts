import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllMovieTvService {
// this service is to get home,movie and tv data // 
// this service used in HOME & TV & MOVIES Components //

  constructor(private _HttpClient:HttpClient) { }

getData(media_type:string):Observable<any>
{
 return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${media_type}/day?api_key=64e8efbb7818bf4d009f2679e215ad31`)
}




}
