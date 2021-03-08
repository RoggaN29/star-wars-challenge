import { Component, OnInit } from '@angular/core';
import { FilmsService } from './../../services/films.service';
import { Film } from './../../interfaces/films.interface';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.sass']
})

export class FilmsListComponent implements OnInit {

  films: Film[] = [];

  constructor( private filmsService: FilmsService ) { }

  ngOnInit(): void {

    this.filmsService.getFilms()
    .subscribe( res => {
      const { results } = res
      this.films = results;
    })

  }

}
