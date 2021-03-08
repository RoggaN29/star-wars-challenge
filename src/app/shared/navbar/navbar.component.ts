import { Component, OnInit } from '@angular/core';
import { Film } from './../../films/interfaces/films.interface';
import { FilmsService } from './../../films/services/films.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  films: Film[] = [];

  constructor( private filmsService: FilmsService ) { }

  ngOnInit( ): void {

    this.filmsService.getFilms()
    .subscribe( res => {
      const { results } = res
      this.films = results;
    })

  }

}
