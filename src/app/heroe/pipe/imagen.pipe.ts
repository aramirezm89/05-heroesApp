import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interfaces';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe : Heroe): string {

    if(heroe.imageId === undefined  || heroe.imageId?.length ===0){
      return `assets/no-image.png`;
    }

    if(heroe.imageId.includes("http")){
      return heroe.imageId;
    }
    return `assets/heroes/${heroe.imageId}.jpg`;

  }


}
