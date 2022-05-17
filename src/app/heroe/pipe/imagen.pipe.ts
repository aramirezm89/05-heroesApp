import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interfaces';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe : Heroe): string {
    if(heroe.imageId.length !==0){
    return `assets/heroes/${heroe.imageId}.jpg`;
    }
    return `assets/heroes/no-image.png`;
  }

}
