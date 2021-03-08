import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film, Films } from './../interfaces/films.interface';
import { Starship } from './../interfaces/starship.interface';
import { Planet } from './../interfaces/planet.interface';
import { Character } from '../interfaces/character.interface';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FilmsService {

  private apiUrl: string = environment.apiUrl;

  constructor( private http: HttpClient ) { }

  getFilms(): Observable<Films> {
    return this.http.get<Films>(`${this.apiUrl}/films`);
  }

  getFilmById( id:string ): Observable<Film> {
    return this.http.get<Film>(`${this.apiUrl}/films/${id}`);
  }

  getCharacterByUrl( url: string ): Observable<Character> {
    return this.http.get<Character>(url);
  }

  getPlanetByUrl( url: string ): Observable<Planet> {
    return this.http.get<Planet>(url);
  }

  getStarshipByUrl( url: string ): Observable<Starship> {
    return this.http.get<Starship>(url);
  }
}
