import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TseProvider {

  constructor(public http: HttpClient) {
    console.log('Hello TseProvider Provider');
  }

  getCapcha(solicitud) {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8' )
      .set('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT')
      .set('Access-Control-Request-Methods', 'POST')
      .set('Access-Control-Allow-Origin', '*')
      .set('Accept','application/json');
     // this.http.post('http://localhost:51242/api/getCapcha', solicitud,{headers:headers})
      this.http.post('http://192.168.0.17:51243/api/getCapcha', solicitud,{headers:headers})
        .subscribe(res => {
          console.log("Resolve", res);
          resolve(res);
        }, (err) => {
          console.error("Error ",err);
          reject(err);
        });
    });
  }
  validarCapcha(data){
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8' )
      .set('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT')
      .set('Access-Control-Request-Methods', 'POST')
      .set('Access-Control-Allow-Origin', '*')
      .set('Accept','application/json');

      //this.http.post('http://localhost:51242/api/validarCapcha', data,{headers:headers})
      this.http.post('http://192.168.0.17:51243/api/validarCapcha', data,{headers:headers})
        .subscribe(res => {
          console.log("Resolve", res);
          resolve(res);
        }, (err) => {
          console.error("Error ",err);
          reject(err);
        });
    });
  }

}
