import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/movies';
@Pipe({
  name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {
  transform(movies:Movie[],filterText:string): Movie[] {
    filterText=filterText.toLowerCase ()
  
    return movies;
}
}