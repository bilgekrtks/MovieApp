import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, ResponsePayload } from '../../models/movies';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  providers:[MoviesService]
})
export class MovieDetailsComponent implements OnInit {

  movie:Movie // böyle diyince result olmadan ulaşamıyoruz
  constructor(private movieService:MoviesService,private activatedRoute: ActivatedRoute ){ } 

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.movieService.getMoviesById(params["movieId"]).subscribe(data=>{
        this.movie=data
      })
    })
  }

}
