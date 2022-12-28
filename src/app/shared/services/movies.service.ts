import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movie1: string[] = ["Black Adam", '2022', "Superhero", 'Watched on 12/11/2022']
  movie2: string[] = ["Women King", '2022', "History", 'Watched on  05/10/2022']
  movie3: string[] = ["After We Fell",'2022', "Romantic Drama",'Watched on 30/09/2022']

  getmovie1(): string[]{
    return this.movie1
  }

  getmovie2(): string[]{
    return this.movie2
  }

  getmovie3(): string[]{
    return this.movie3
  }



  constructor() { }
}
