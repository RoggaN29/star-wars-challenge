import { Film } from './../../interfaces/films.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.sass']
})
export class FilmCardComponent {

  @Input() film!: Film;
  @Input() index!: number;

  constructor() { }

}
