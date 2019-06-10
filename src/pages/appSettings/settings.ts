import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController,public app: App) {

  }


  logout(){
   // Logout
    localStorage.removeItem('userData');
    const root = this.app.getRootNav();
    root.popToRoot();

  }

}
