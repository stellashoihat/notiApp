import { SettingsPage } from './../appSettings/settings';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';


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
  userData = {"username": "","password": "", "name": "","email": "","phone":""};

  constructor(public navCtrl: NavController, public navParams: NavParams , public authService:AuthServiceProvider,private toastCtrl:ToastController,public popup:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }



  //


  signup(){
    //Api connections
    if(this.userData.name && this.userData.email && this.userData.password && this.userData.username){

             this.authService.postData(this.userData,'signup').then((result)=>{

                        this.responseData = result;
                        if(this.responseData.userData.true==true){

                            console.log(this.responseData);
                            localStorage.setItem('userData',JSON.stringify(this.responseData));//
                            //if all good go to the firstPage [TabsPage]


                            //
                            const alert =  this.popup.create({
                              title: 'ההרשמה הצליחה',
                              message: 'לקבלת התראות על מודעות חדשות צריך לכנס להגדרות ולהרשם',
                              buttons: [
                              /* {
                                  text: 'להרשמה',
                                  role: 'cancel',
                                  handler: data => {
                                    this.navCtrl.push(SettingsPage);
                                  }
                                },*/
                                {
                                  text: 'ok',
                                  role: 'ok',
                                  handler:data=>{
                                    this.navCtrl.push(TabsPage);
                                  }
                                }
                              ]
                            });
                            alert.present();
                            //


                        }
                        else{
                          let msg ="משתמש קיים במערכת";
                           console.log();
                           let toast = this.toastCtrl.create({
                            message: msg,
                            duration: 2000
                          });
                          toast.present();
                          }

                },(err)=>{
                  //Error
                  console.log("error in signup function");
                })

             }


    }

    login(){
      //Login page link
      this.navCtrl.push(LoginPage);
    }

}
