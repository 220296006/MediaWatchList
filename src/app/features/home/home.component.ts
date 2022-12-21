import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// properties
switch: boolean= false;
title: string = "Media Watch List";    // data binding

public image = "/assets/movie-logo.png";

onClick(){
  console.log("Movies Watched")
}

// methods
ngOnInit(): void { 
  
}

}
