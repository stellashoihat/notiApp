import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

let apiUrl = 'http://127.0.0.1:8000/api/';
let serverImagePath = "/images/thumbnail/";

@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }





  getData(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();


      headers.append('Access-Control-Allow-Origin' , '*');
     // headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
       //headers.append('Accept','application/json');
       headers.append('content-type','application/json');
       headers.append('fromApp','true');

      // let options = new RequestOptions( { headers:headers,withCredentials: true});


      this.http.get(apiUrl + type, {headers: headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });

      /*this.http.post(apiUrl + type, JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });*/
    });


}



postData(credentials, type) {
  return new Promise((resolve, reject) => {
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
   // headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
   //headers.append('Accept','application/json');
   headers.append('content-type','application/json');
     let options = new RequestOptions({ headers:headers,withCredentials: true});
    // let options = new RequestOptions({ headers:headers});
  //  console.log(JSON.stringify(credentials));
    this.http.post(apiUrl + type, credentials, {headers: headers})//JSON.stringify(credentials)
      .subscribe(res => {
        //console.log(res);
        resolve(res.json());
        //  resolve(res);
      }, (err) => {
        reject(err);
      });
  });


}
}
