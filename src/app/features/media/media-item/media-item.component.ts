import { Component, OnInit } from "@angular/core";
//import { MoviesService } from "src/app/movies.service";
import movieData  from "src/assets/movie.json";


interface Movie {
    movie: String;
    year: Number;
    genre: String;
    date: String;
}

@Component ({
selector: 'mw-media-item',
templateUrl: './media-item.component.html',
styleUrls: ['./media-item.component.css'],
//providers: [MoviesService]
})

export class MediaItemComponent implements OnInit{

    constructor(){}
    
    movies: Movie[] = movieData;
    displayedColumns: string[] = ['movie', 'year', 'genre', 'date'];
    dataSource = this.movies;
   

    fromLocalStorage: string = "";

    

    // movieRecieved1: string[]=[];
    // movieRecieved2: string[]=[];  
    // movieRecieved3: string[]=[];

    // getMovieServiceClass1(){
    //     this.movieRecieved1 = this.movieService.getmovie1()
    // }

    // getMovieServiceClass2(){
    //     this.movieRecieved2 = this.movieService.getmovie2()
    // }

    // getMovieServiceClass3(){
    //     this.movieRecieved3 = this.movieService.getmovie3()
    // }

    
    ngOnInit(): void{
        let name = window.localStorage.getItem('name');
        if (name !== null){
            this.fromLocalStorage = name;
            console.log(this.fromLocalStorage)
        }

    }
}