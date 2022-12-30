import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './modules/material.module';

import { MediaItemComponent } from './features/media/media-item/media-item.component';
import { HomeComponent } from './features/home/home.component';
import { ImageComponent } from './features/image/image.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { NavComponent } from "./shared/components/nav/nav.component";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        MediaItemComponent,
        HomeComponent,
        ImageComponent,
        MovieFormComponent,
        NavComponent,
        LoginComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularMaterialModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatTableModule
        
    ],
})
export class AppModule { }
