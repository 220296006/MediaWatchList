import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MediaItemComponent } from './features/media/media-item/media-item.component';
import { HomeComponent } from './features/home/home.component';
import { ImageComponent } from './features/image/image.component';


@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    HomeComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
