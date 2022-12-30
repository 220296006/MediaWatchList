import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  
  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/movies";
  
  getAllMovies(){
    return this.http.get(this.url);
  }

  saveMovieData(movie: Partial<{ movie: string | null; year: string | null; genre: string | null; date: string | null; }>){
    console.log( movie )
    return this.http.post(this.url, movie)
  }   
}
