import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  page = 1;
  showModal: boolean;
  currentMovie: Movie;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getByPage();
  }
  getMovies(): Movie[] {
    return this.movieService.getMovies();
  }
  getByPage(): void {
    this.movieService.getByPage(this.page)
      .subscribe(movies => {
        this.movieService.setMovies(movies);
      });
  }
  nextPage(): void {
    this.page++;
    this.getByPage();
  }
  showMovieModalDetail(movie: Movie): void {
    this.showModal = true;
    this.currentMovie = movie;
  }
  closeMovieModalDetail(): void {
    this.showModal = false;
  }
  searchMovie(searchValue: string): void {
    this.page = 1;
    if (!searchValue) {
      return this.getByPage();
    }
    this.movieService.getByTitle(searchValue)
      .subscribe(movies => this.movieService.setMovies(movies));
  }
}
