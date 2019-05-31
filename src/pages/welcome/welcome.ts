import { HomePage } from './../home/home';
import { SignupPage } from './../signup/signup';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController) {

    const userData = localStorage.getItem('userData');


    const userDataParse = JSON.parse(userData);
    if(userData != null && userDataParse.userData){
      this.navCtrl.push(TabsPage);
    }
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }



  login(){
    this.navCtrl.push(LoginPage);
    }

    signup(){
    this.navCtrl.push(SignupPage);
    }
}
