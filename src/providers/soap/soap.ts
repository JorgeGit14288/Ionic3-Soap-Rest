//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SoapProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SoapProvider {

  constructor(/*public http: HttpClient*/) {
    console.log('Hello SoapProvider Provider');
  }
  validarDpi(dpi: string, fechaNacimiento: string) {


    return new Promise((resolve, reject) => {
      if (dpi === '123' && fechaNacimiento === '2017-01-01') {
        resolve(true);
      }
      else {
        resolve(false);
      }
    }).catch(err => {
      console.log(err);
      
    });
  }



}
