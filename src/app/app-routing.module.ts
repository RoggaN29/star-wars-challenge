import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'films',
    loadChildren: () => import('./films/films.module').then( m => m.FilmsModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/form.module').then( m => m.FormModule)
  },
  {
    path:'404',
    component: ErrorPageComponent
  },
  {
    path: '',
    redirectTo: '/films/listFilms',
    pathMatch: 'full'
  },
  {
    path:'**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
