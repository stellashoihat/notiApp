import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-request',
  templateUrl: 'request.html'
})
export class RequestPage {

  requestData = {"full_name": "","personID": "", "helka_num": "","gosh": "","meter_number":"","request_text":""};
  constructor(public navCtrl: NavController) {

  }

  send_request(){
      console.log(this.requestData);
  }

}
