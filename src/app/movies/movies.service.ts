import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Movie, ResponsePayload } from '../models/movies';

@Injectable({ //kopyasını alıp referansını oluşturmak
  providedIn: 'root'
})
export class MoviesService {
  apiKey = '06b00e22ef27ee8e12f883f6a5a40b28'
  url1 = `https://api.themoviedb.org/3/movie`;
  url2=`?api_key=${this.apiKey}`
  url=this.url1+"/popular"+this.url2
  constructor(private http: HttpClient) { }
 
  getMovies(): Observable<ResponsePayload<Movie[]>> {

    return this.http.get<ResponsePayload<Movie[]>>(this.url)

  }
  getMoviesById(movieId:number):Observable<Movie>{
    return this.http.get<Movie>(this.url1+"/"+movieId+this.url2)

  }

}

