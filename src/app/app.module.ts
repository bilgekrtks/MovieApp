import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './pipes/summary.pipe';
import { MovieFilterPipe } from './movies/movie-filter.pipe';
import { AlertifyService } from './services/alertify.service';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpcomingComponent } from './movies/upcoming/upcoming.component';
import { AlertComponent } from './shared/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    MoviesComponent,
    MovieDetailsComponent,
    FooterComponent,
    SummaryPipe,
    MovieFilterPipe,
    UpcomingComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
 
   
  ],
  providers: [
    AlertifyService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
