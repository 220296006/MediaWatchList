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
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { NavComponent } from "./shared/components/nav/nav.component";

@NgModule({
    declarations: [
        AppComponent,
        MediaItemComponent,
        HomeComponent,
        ImageComponent,
        MovieFormComponent,
        NavComponent
    ],
    providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularMaterialModule,
        FormsModule,
        
    ]
})
export class AppModule { }
