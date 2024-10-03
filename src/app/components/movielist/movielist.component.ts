import { Component } from '@angular/core';
import { Movies } from './movie';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css'],
})
export class MovielistComponent {
  id: number = 1;
  director = '';
  title = '';
  movies: Movies[] = [];

  addMovies() {
    if (this.id && this.title && this.director) {
      const newMovie: Movies = {
        movieId: this.id,
        movieTitle: this.title,
        movieDirector: this.director,
      };

      this.movies.push(newMovie);

      this.id++;
      this.title = '';
      this.director = '';
    } else {
      console.error('All fields are required');
    }
  }
}
