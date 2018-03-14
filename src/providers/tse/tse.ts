import { HttpClient } from '@angular/common/http';
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
     this.http.post('http://165.227.57.200:3000/api/tse/captcha', solicitud)
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

     this.http.post('http://165.227.57.200:3000/api/tse/lugarVotacion', data)
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
