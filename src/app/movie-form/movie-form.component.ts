import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';
import { MoviesService } from "src/app/shared/services/movies.service";

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  constructor(private movie: MoviesService) { }
  enterMovie = new FormGroup({
    movie: new FormControl(""),
    year: new FormControl(""),
    genre: new FormControl(""),
    date: new FormControl('')
  });


  saveMovieData() {
    this.movie.saveMovieData(this.enterMovie.value).subscribe((result) => {
      console.log(result);
    });
  }

  ngOnInit(): void {

  }

}
