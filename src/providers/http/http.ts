import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HttpProvider Provider');
  }
  getUsers() {
    console.log("Estoy en get users");
    return this.http.get('https://randomuser.me/api/?results=25');
  }
  getCapcha(solicitud){
     console.log("Estoy en get capcha");
     var headers = new HttpHeaders();
     //headers.set('Access-Control-Allow-Origin', '*'),
     headers.set('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT');
     headers.set('Accept','application/json');
     headers.set('content-type','application/json');

    return this.http.post('http://localhost:50787/api/solicitarCapcha', JSON.stringify(solicitud))
  }
  getCapcha2(data) {
    let solicitud = {
      "codSys": "ef1b058bc386",
      "cui": "1840423991412",
      "fechaNacimiento": "1925-09-03"
    };
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8' )
      .set('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT')
      .set('Access-Control-Request-Methods', 'POST')
      .set('Access-Control-Allow-Origin', '*')
      .set('Accept','application/json');
      //C:\Program Files\Chrome\Chrome.exe --disable-web-security

      this.http.post('http://localhost:51242/api/getCapcha', solicitud,{headers:headers})
        .subscribe(res => {
          console.log("Resolve", res);
          resolve(res);
        }, (err) => {
          console.error("Error ",err);
          reject(err);
        });
    });
  }
  test(){
     return new Promise((resolve, reject) => {
      this.http.post('http://localhost:51242/api/test',null)
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
