import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { Movie } from '../models/movies';
import { MoviesService } from './movies.service';
import { filter, Subject, takeUntil } from 'rxjs';
import { ActivatedRoute,  NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MoviesService]
})

export class MoviesComponent implements OnInit, OnDestroy {

  movies: Movie[] = [];
  filterText: string = "";
  filteredMovies: Movie[] = [];
  error: any ='bulunamadı';
  unsubscribe$: Subject<any> = new Subject();
  currentGenre = 0;

  constructor(private alertify: AlertifyService,
    private movieService: MoviesService, private ac: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.router.events.pipe(takeUntil(this.unsubscribe$)
      , filter(val => val instanceof NavigationEnd)).subscribe(val => {
        let ev = val as NavigationEnd;
        let u = ev.url.split('/');
        this.currentGenre = +(u[u.length - 1]);
        console.log(ev,u,this.currentGenre)
        this.getMovies()
      })
    this.getMovies()
  }

  getMovies() {
    this.movieService.getMovies().pipe(takeUntil(this.unsubscribe$)).subscribe(data => {
   
      this.movies = data.results;
      this.filteredMovies = this.movies.filter(m => this.currentGenre ? m.genre_ids.includes(this.currentGenre) : true);

    }, error => this.error = error)
  }

  onInputChange() {
    this.filteredMovies = this.filterText ?
      this.movies.filter(m => m.title.indexOf(this.filterText) !== -1 || m.overview.indexOf(this.filterText) !== -1) : this.movies
  }

  addToList($event: any, movie: Movie) {
    if ($event.target.classList.contains('btn-success')) {
      $event.target.innerText = "Listeden Çıkar";
      $event.target.classList.remove('btn-success')
      $event.target.classList.add('btn-danger')
      this.alertify.success(movie.title + 'listeye eklendi')
    } else {
      $event.target.innerText = "Listeye Ekle";
      $event.target.classList.remove('btn-danger')
      $event.target.classList.add('btn-success')
      this.alertify.error(movie.title + 'listeden çıkarıldı')
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(null)
    this.unsubscribe$.complete()
  }
}