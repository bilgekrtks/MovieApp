import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { UpcomingComponent } from './movies/upcoming/upcoming.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies/category/:categoryId', component: MoviesComponent },
  { path: 'movies/:movieId', component: MovieDetailsComponent },
  { path: 'upcoming', component: UpcomingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
