import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  responseData : any;
  userData = {"username": "","password": "", "name": "","email": ""};

  constructor(public navCtrl: NavController, public navParams: NavParams , public authService:AuthServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }



  //


  signup(){
                //Api connections
                this.authService.postData(this.userData,'signup').then((result)=>{

                        this.responseData = result;
                        if(this.responseData.userData){

                            console.log(this.responseData);
                            localStorage.setItem('userData', JSON.stringify(this.responseData));
                            //if all good go to the firstPage [TabsPage]
                            this.navCtrl.push(TabsPage);

                        }
                        else{
                           console.log("User already exists");
                          }

                },(err)=>{
                  //Error
                  console.log("error in signup function");
                })
    }

    login(){
      //Login page link
      this.navCtrl.push(LoginPage);
    }

}
