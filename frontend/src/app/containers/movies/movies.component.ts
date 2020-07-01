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
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getByPage();
  }
  getMovies(): Movie[] {
    return this.movieService.getMovies();
  }
  getByPage() {
    this.movieService.getByPage(this.page)
      .subscribe(movies => {
        this.movieService.setMovies(movies);
      });
  }
  nextPage() {
    this.page++;
    this.getByPage();
  }
}
