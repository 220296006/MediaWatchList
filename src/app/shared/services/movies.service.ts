import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  url = 'http://localhost:3000/movies';
  
  constructor(private http: HttpClient) { }
  getAllMovies(){
    return this.http.get(this.url)
  }

  saveMovieData(movie: any){
    console.log( movie )
    return this.http.post(this.url, movie)
  }   
}
