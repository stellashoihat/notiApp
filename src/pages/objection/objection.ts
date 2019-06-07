import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { NavController, NavParams ,ToastController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the ObjectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-objection',
  templateUrl: 'objection.html',
})
export class ObjectionPage {
  itemData : any;
  reqData = {"cause_text":"","name_req":""};
  resposeData : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthServiceProvider,private toastCtrl:ToastController) {
    console.log(navParams);
    this.itemData = navParams.data;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ObjectionPage');
  }

  send_objection(req){
    var LoggedInUser=JSON.parse(localStorage.getItem('userData'));
    console.log(LoggedInUser.userData.id);

    var reqObjectionData = {
      "name_req":this.reqData.name_req,
      "cause_text":this.reqData.cause_text,
      "block_number":req.itemData.block_number,
      "id":req.itemData.id,
      "app_user_id":LoggedInUser.userData.id
    };
    //console.log(req);
   // console.log(this.reqData);
    console.log(reqObjectionData);
    //send to server
    if(reqObjectionData.cause_text && reqObjectionData.name_req){
      this.authService.postData(reqObjectionData, "new_objection").then((result) =>{
          this.resposeData = result;
          console.log(this.resposeData);

          if(this.resposeData.objection.ok==true){
            //localStorage.setItem('userData', JSON.stringify(this.resposeData) )
            this.presentToast("קיבלנו את הערעור שלך תודה");
            this.navCtrl.push(TabsPage);
          }
          else{
          this.presentToast("שגיאה בנתונים שהכנסת");
          }


      }, (err) => {
        //Connection failed message
        console.log("login post error! , Connection failed message");
      });
     }
     else{
      this.presentToast("הכנס כל הפרטים בבקשה");
     }
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

}
