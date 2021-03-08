import { Film } from './../interfaces/films.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(film: Film): String {
    return `assets/sw${film.episode_id}.jpg`;
  }

}
