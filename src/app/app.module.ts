
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { SettingsPage } from '../pages/appSettings/settings';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { SignupPage } from './../pages/signup/signup';
import { LoginPage } from './../pages/login/login';
import { WelcomePage } from './../pages/welcome/welcome';

import { SignaturePadModule } from 'angular2-signaturepad';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { HttpModule } from '@angular/http';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ItemImageComponent } from '../components/item-image/item-image';
import { RequestPage } from '../pages/request/request';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    SettingsPage,
    HomePage,
    TabsPage,
    SignupPage,
    RequestPage,
    LoginPage,
    WelcomePage,
    ItemDetailsPage,
    ItemImageComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: 'חזור'
    }),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    SettingsPage,
    HomePage,
    TabsPage,
    SignupPage,
    RequestPage,
    LoginPage,
    WelcomePage,
    ItemDetailsPage,
    ItemImageComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
