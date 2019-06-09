import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


@Component({
  selector: 'page-request',
  templateUrl: 'request.html'
})
export class RequestPage {

  requestData = {"full_name": "","personID": "", "helka_num": "","gosh": "","meter_number":0,"request_text":"","app_user_id":""};
  resposeData : any;

  constructor(public navCtrl: NavController,public authService: AuthServiceProvider, private toastCtrl:ToastController) {
    var LoggedInUser=JSON.parse(localStorage.getItem('userData'));
    this.requestData.app_user_id = LoggedInUser.userData.id;
  }

  send_request(){
      console.log(this.requestData);

      if(this.requestData.personID && this.requestData.meter_number>0){
        this.authService.postData(this.requestData, "new_requestByUser").then((result) =>{

             this.resposeData = result;
            console.log(this.resposeData);

             if(this.resposeData.UserRequest.ok==true){
                this.presentToast("הבקשה התקבלה");
               // this.navCtrl.push(HomePage);

            }
            else{
              this.presentToast("הבקשה לא התקבלה");
            }



        }, (err) => {
          //Connection failed message
          console.log("login post error! , Connection failed message");
        });
       }
       else{
        //this.presentToast("הכנס שם משתמש וסיסמה בבקשה");
       }
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,

    });
    toast.present();
  }

}
