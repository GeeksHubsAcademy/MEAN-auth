import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from 'src/app/models/movie.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  API_URL = environment.API_URL;
  private movies: Movie[] = [];
  constructor(private httpClient: HttpClient) { }
  // getAll(): Observable<Movie[]> {
  //   // const headers = new HttpHeaders();
  //   // headers.set('authorization', localStorage.getItem('authToken'));
  //   return this.httpClient.get<Movie[]>(this.API_URL + '/movies', {
  //     headers: {
  //       authorization: localStorage.getItem('authToken')
  //     }
  //   });
  // }
  getByPage(page: number): Observable<Movie[]> {
    // const headers = new HttpHeaders();
    // headers.set('authorization', localStorage.getItem('authToken'));
    return this.httpClient.get<Movie[]>(this.API_URL + '/movies/page/' + page);
  }
  setMovies(movies: Movie[]): void {
    this.movies = movies;
  }
  getMovies(): Movie[] {
    return this.movies;
  }
}
