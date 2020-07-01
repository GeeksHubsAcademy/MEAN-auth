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
  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Movie[]> {
    // const headers = new HttpHeaders();
    // headers.set('authorization', localStorage.getItem('authToken'));
    return this.httpClient.get<Movie[]>(this.API_URL + '/movies', {
      headers: {
        authorization: localStorage.getItem('authToken')
      }
    });
  }
}
