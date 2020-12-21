import { HomeComponent } from './home/home.component';
import { ImmaginiComponent } from './immagini/immagini.component';
import { VideoComponent } from './video/video.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path : 'home' , component: HomeComponent},
  { path: 'video' , component : VideoComponent},
  { path : 'immagini',component: ImmaginiComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
