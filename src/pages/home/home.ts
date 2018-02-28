import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImageGalleryProvider } from "../../providers/image-gallery/image-gallery";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    ImageGalleryProvider
  ]
})
export class HomePage {

  public gallery_list = new Array<any>();

  constructor(
    public navCtrl: NavController,
    public imagesProvider: ImageGalleryProvider,
  ) {}

  ionViewDidLoad() {
    this.imagesProvider.getPhotos().subscribe(
      data=>{
        const response = (data as any);
          const obj = JSON.parse(response._body);
          this.gallery_list = obj.data.gallery;

          console.log(obj);
      }, error=>{
        console.log(error)
      }

    )
  }


}
