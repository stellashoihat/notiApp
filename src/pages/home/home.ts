import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { NavController ,App, LoadingController, ToastController} from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userDetails : any;
  responseData: any;
  user_full_name: any;

  userPostData = {"user_id":"","token":""};
  constructor(public navCtrl: NavController , public app:App,  public authService:AuthServiceProvider,public loadingCtrl: LoadingController,private toastCtrl:ToastController) {


    const data = JSON.parse(localStorage.getItem('userData'));


    //this.userPostData.user_id = this.userDetails.user_id;
    //this.userPostData.token = this.userDetails.token;
    this.user_full_name = data.userData.name;
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad HomePage');
    const loader = this.loadingCtrl.create({
      content: "המתן בבקשה...",
      duration: 500
    });
    this.loadLastNotices();
    loader.present();
  }



  loadLastNotices(){
    this.authService.getData({'fromApp':true}, "getLastNotices").then((result) =>{
      this.responseData = result;
      this.responseData = this.responseData.lastNotices;
      console.log(this.responseData);

      }, (err) => {
        //Connection failed message
        console.log("failed to load last Notices message");
        this.presentToast("שגיאה בטעינת נתונים");
      });
  }

  itemSelected(item){
    console.log(item);
    this.navCtrl.push(ItemDetailsPage,item);
  }

  backToWelcome(){
    const root = this.app.getRootNav();
    root.popToRoot();
 }

 logout(){
      localStorage.clear();
      setTimeout(() => this.backToWelcome(), 1000);
 }


 presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 4000
  });
  toast.present();
}
newRequest(){
  console.log("newRequest");

}
   /* logout(){
      // Remove API token
      const root = this.app.getRootNav();
      root.popToRoot();
  }
  */

}
