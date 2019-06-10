import { ResultSearchPage } from './../result-search/result-search';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, LoadingController, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  searchData = {"startDate":"", "endDate":"","Gosh":"","helka":"","area":"","city":"","mahoz":""};
  res_Data :any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app:App,
    public authService:AuthServiceProvider,
    public loadingCtrl: LoadingController,
    private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  do_search(){
      console.log(this.searchData);

      this.authService.postData(this.searchData,'search_data').then((result) =>{
        this.res_Data = result;
        this.res_Data = this.res_Data.search_res;
        console.log(this.res_Data);
        this.navCtrl.push(ResultSearchPage,this.res_Data);
        }, (err) => {
          //Connection failed message
          console.log("failed to load last Notices message");
          this.presentToast("שגיאה בטעינת נתונים");
        });



  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 4000
    });
    toast.present();
  }


}
