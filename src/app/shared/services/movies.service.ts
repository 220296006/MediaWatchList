import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { movieModel } from '../models/movieModel';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  
  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/movies";
  
  getAllMovies():Observable<movieModel[]>{
    return this.http.get<movieModel[]>(this.url);
  }

  getById(id: any):Observable<movieModel>{
    return this.http.get<movieModel>(this.url+'/'+id);
  }

  removeById(id: any){
    return this.http.delete(this.url +'/'+id);
  }

  updateById(id: any, movie: any){
    return this.http.put(this.url +'/'+id, movie);
  }  

  saveMovieData(movie: Partial<{ movie: string | null; year: string | null; genre: string | null; date: string | null; }>){
    console.log( movie )
    return this.http.post(this.url, movie)
  }   
}
