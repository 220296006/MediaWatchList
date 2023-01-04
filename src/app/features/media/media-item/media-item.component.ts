import { Component, OnInit } from "@angular/core";
import { MoviesService } from "C:/Users/thabi/Downloads/Compressed/my-project/src/app/shared/services/movies.service";


interface Movie {
  movie: String;
  year: Number;
  genre: String;
  date: String;
}

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css'],
})

export class MediaItemComponent implements OnInit {

  constructor(private service: MoviesService) { }

  ngOnInit(): void {
    this.getAllMovies();
  }

  movieData: any;
  displayedColumns: string[] = ['movie', 'year', 'genre', 'date'];
  dataSource = this;

  getAllMovies() {
    this.service.getAllMovies().subscribe(response => {
      this.movieData = response;
      console.log(this.movieData);
    })
  }
}
