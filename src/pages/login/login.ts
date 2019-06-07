import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  resposeData : any;
  userData = {"username":"", "password":""};


  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthServiceProvider, private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  //

  /*login(){
    // Your app login API web service call triggers
    this.navCtrl.push(HomePage, {}, {animate: true});
  }*/
  login(){
    if(this.userData.username && this.userData.password){
     this.authService.postData(this.userData, "login").then((result) =>{
          this.resposeData = result;
          console.log(this.resposeData);
          if(this.resposeData.userData.isOk==true){
            localStorage.setItem('userData', JSON.stringify(this.resposeData) )
            this.navCtrl.push(TabsPage);
        }
        else{
          this.presentToast("שם משתמש וסיסמה לא נכונים");
        }



     }, (err) => {
       //Connection failed message
       console.log("login post error! , Connection failed message");
     });
    }
    else{
     this.presentToast("הכנס שם משתמש וסיסמה בבקשה");
    }

   }


   presentToast(msg) {
     let toast = this.toastCtrl.create({
       message: msg,
       duration: 2000
     });
     toast.present();
   }



   //reset_password

   reset_password(){
      console.log('reset_password');
   }
}
