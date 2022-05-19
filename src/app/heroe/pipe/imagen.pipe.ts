import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interfaces';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe : Heroe): string {

    if(heroe.imageId === undefined){
          return `assets/no-image.png`;
    }

    return `assets/heroes/${heroe.imageId}.jpg`;



  }


}
