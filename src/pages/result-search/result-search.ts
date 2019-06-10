import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';

/**
 * Generated class for the ResultSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result-search',
  templateUrl: 'result-search.html',
})
export class ResultSearchPage {
  responseData :any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.data);
    this.responseData = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultSearchPage');
  }

  itemSelected(item){
    this.navCtrl.push(ItemDetailsPage,item);
  }
}
