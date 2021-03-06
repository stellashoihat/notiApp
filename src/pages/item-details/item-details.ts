import { ReportProblemPage } from './../report-problem/report-problem';
import { ObjectionPage } from './../objection/objection';
import { ItemImageComponent } from './../../components/item-image/item-image';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController, ViewController } from 'ionic-angular';

/**
 * Generated class for the ItemDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html',
})
export class ItemDetailsPage {
  serverImagePath = "http://pandbnotices.com/images/thumbnail/";
  itemData : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {

    //this.navParams.data.pic_full_name = this.navParams.data.pic_full_name;
    this.serverImagePath += this.navParams.data.pic_full_name;
    console.log( this.navParams.data.pic_full_name);
    console.log(this.serverImagePath);
    this.itemData = navParams.data;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemDetailsPage');
    console.log(this.navParams.data);
  }
  toFullScreen(img){
     let profileModal = this.modalCtrl.create(ItemImageComponent, { link: "http://pandbnotices.com/images/"+img });
      profileModal.onDidDismiss(data => {
        console.log(data);
      });
     profileModal.present();
     // console.log(img);
  }


  //
  objection(dataReq){
    console.log(dataReq.itemData);
    this.navCtrl.push(ObjectionPage,dataReq.itemData);
  }
  takla(dataReq){
    console.log(dataReq);
    this.navCtrl.push(ReportProblemPage,dataReq.itemData);
  }
}
