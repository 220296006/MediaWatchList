import { NgModule, ɵgetHostElement } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { MediaItemComponent } from './features/media/media-item/media-item.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'login', pathMatch: 'full', component: LoginComponent},
  {path: 'nav', pathMatch: 'full', component: HomeComponent },
  {path:'movie-form', pathMatch: 'full', component: MovieFormComponent },
  {path: 'media-item', pathMatch: 'full', component: MediaItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
