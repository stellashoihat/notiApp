import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the ReportProblemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report-problem',
  templateUrl: 'report-problem.html',
})
export class ReportProblemPage {
  itemData : any;
  reqData = {"problem_text":"","full_name":""};
  responseData : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthServiceProvider,private toastCtrl:ToastController) {
    this.itemData = navParams.data;
    var LoggedInUser=JSON.parse(localStorage.getItem('userData'));
    this.reqData.full_name = LoggedInUser.userData.name;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportProblemPage');

  }
  //: יפתח מסך חדש, צריך למלא את השם המלא ולבחור מרשימת התקלות את התקלה המתאימה, עם טקסט להסבר קטן על התקלה. נצטרך לטבלה של תקלות שתכיל מספר מודעה, תקלה, וטקסט הסבר.

  sendProblemData(req){

    let LoggedInUser=JSON.parse(localStorage.getItem('userData'));


    var problemData = {
      "full_name":LoggedInUser.userData.name,
      "problem_text":this.reqData.problem_text,
      "id_announcement":req.itemData.id,
      "app_user_id":LoggedInUser.userData.id
    };
    console.log(problemData);


    //

        //send to server
        if(problemData.problem_text){
          this.authService.postData(problemData, "new_problem").then((result) =>{
              this.responseData = result;
              console.log(this.responseData);

              if(this.responseData.AnnouncementProblem.ok==true){
                //localStorage.setItem('userData', JSON.stringify(this.resposeData) )
                this.presentToast("קיבלנו את הדווח שלך תודה");
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

    //
  }





  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
}
