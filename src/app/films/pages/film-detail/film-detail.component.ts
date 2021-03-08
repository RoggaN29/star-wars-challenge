import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from './../../services/films.service';
import { Film } from './../../interfaces/films.interface';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.sass']
})

export class FilmDetailComponent implements OnInit {

  idFilm: String = '';
  film!: Film;
  characters: string[] = [];
  planets: string[] = [];
  starships: string[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private filmsService: FilmsService) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => {
          return this.filmsService.getFilmById(id)
        })
      )
      .subscribe((film) => {
        this.cleanItems();
        this.film = film;

        film.characters.forEach((urlCharacter) => {
          this.filmsService.getCharacterByUrl(urlCharacter)
            .subscribe(res => {
              this.characters.push(res.name);
            });
        })

        film.planets.forEach((urlPlanet) => {
          this.filmsService.getPlanetByUrl(urlPlanet)
            .subscribe(res => {
              this.planets.push(res.name)
            })
        })

        film.starships.forEach((urlStarship) => {
          this.filmsService.getStarshipByUrl(urlStarship)
            .subscribe(res => {
              this.starships.push(res.name)
            })
        })

      })

  }

  cleanItems() {
    this.characters = [];
    this.planets = [];
    this.starships = [];
  }

}
