import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ItemImageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'item-image',
  templateUrl: 'item-image.html'
})
export class ItemImageComponent {

  image: string;

  constructor(public viewCtrl: ViewController,params: NavParams) {

    console.log('Hello ItemImageComponent Component');
    console.log(params.data.link);
    this.image = params.data.link;
  }

  dismiss() {
    let data = { 'ok': true };
    this.viewCtrl.dismiss(data);
  }
}
