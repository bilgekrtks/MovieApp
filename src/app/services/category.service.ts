import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePayload} from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 
  constructor( private http:HttpClient) {}
  apiKey='06b00e22ef27ee8e12f883f6a5a40b28';
  getCategories():Observable<ResponsePayload>{
    const url =`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}`
    return this.http.get<ResponsePayload>(url)
  }

}
