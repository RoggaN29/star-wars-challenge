import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsRoutingModule } from './films-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../material/material.module';

import { FilmDetailComponent } from './pages/film-detail/film-detail.component';
import { FilmsListComponent } from './pages/films-list/films-list.component';
import { FilmCardComponent } from './components/film-card/film-card.component';
import { ImagePipe } from './pipes/image.pipe';
import { ReversePipe } from './pipes/reverse.pipe';



@NgModule({
  declarations: [
    FilmDetailComponent,
    FilmsListComponent,
    FilmCardComponent,
    ImagePipe,
    ReversePipe
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class FilmsModule { }
