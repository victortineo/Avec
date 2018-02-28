import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the ImageGalleryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImageGalleryProvider {
  private baseApiPath = "http://api.salaovip.com.br/salao/66/galeria";

  constructor(public http: Http) {
    console.log('Hello ImageGalleryProvider Provider');
  }


  getPhotos(){
      return this.http.get(this.baseApiPath);
  }
}
