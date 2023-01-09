import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Upcoming, UpcomingPayload } from '../models/upcoming';

@Injectable({
  providedIn: 'root'
})
export class UpcomingService {
   url = `https://api.themoviedb.org/3/movie/upcoming?api_key=06b00e22ef27ee8e12f883f6a5a40b28`
  constructor(private http: HttpClient) { }
  getUpcoming(): Observable<UpcomingPayload<Upcoming[]>> {
    return this.http.get<UpcomingPayload<Upcoming[]>>(this.url)
  }

}
