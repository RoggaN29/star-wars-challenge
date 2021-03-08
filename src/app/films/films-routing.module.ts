import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmDetailComponent } from './pages/film-detail/film-detail.component';
import { FilmsListComponent } from './pages/films-list/films-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'listFilms',
        component: FilmsListComponent
      }, {
        path: ':id',
        component: FilmDetailComponent
      },
      {
        path: '**',
        redirectTo: 'listFilms'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})

export class FilmsRoutingModule { }
