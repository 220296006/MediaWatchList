import { Component } from '@angular/core';


@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent {

  submit(enterMovie: any){
      console.log("Form Submitted", enterMovie)
  }

}
