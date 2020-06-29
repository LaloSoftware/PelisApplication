import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform( image: string ): string {  
    if ( image != "https://image.tmdb.org/t/p/originalundefined" && image != "https://image.tmdb.org/t/p/originalnull" ) {
      return image;
    } else {
      return 'assets/img/noimage.png';
    }

  }

}
