import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the SoapProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SoapProvider {

  constructor(public http: HttpClient) {
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
  getCapcha() {
    console.log("Consumiendo capcha");

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text/xml',
        'Authorization': 'my-auth-token',
        'Access-Control-Allow-Origin': '*'
      })
    };

    let xml = "<soapenv:Body>" +
      "<tem:Transacciones1>" +
      "<!--Optional:-->" +
      "<tem:codSys>ef1b058bc386</tem:codSys>" +
      "<!--Optional:-->" +
      "<tem:cui>1840423991412</tem:cui>" +
      "<!--Optional:-->" +
      "<tem:fechaNacimiento>1925-09-03</tem:fechaNacimiento>" +
      "</tem:Transacciones1>" +
      "</soapenv:Body>";

    let xml2 = "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:tem='http://tempuri.org/'> " +
      "<soapenv:Header/>" +
      "<soapenv:Body>" +
      "  <tem:Transacciones1>" +
      "     <!--Optional:-->" +
      "     <tem:codSys>ef1b058bc386</tem:codSys>" +
      "     <!--Optional:-->" +
      "     <tem:cui>1840423991412</tem:cui>" +
      "     <!--Optional:-->" +
      "     <tem:fechaNacimiento>1925-09-03</tem:fechaNacimiento>" +
      "  </tem:Transacciones1>" +
      "</soapenv:Body>" +
      "</soapenv:Envelope>";

    return this.http.post('http://wspruebas1.azurewebsites.net/CaptchaService.asmx', xml2, httpOptions);

  }

  GetPeople() {
    try {
      let xml = "<soapenv:Body>" +
      "<tem:Transacciones1>" +
      "<!--Optional:-->" +
      "<tem:codSys>ef1b058bc386</tem:codSys>" +
      "<!--Optional:-->" +
      "<tem:cui>1840423991412</tem:cui>" +
      "<!--Optional:-->" +
      "<tem:fechaNacimiento>1925-09-03</tem:fechaNacimiento>" +
      "</tem:Transacciones1>" +
      "</soapenv:Body>";
      // var xhttp = new XMLHttpRequest();
      // xhttp.open("POST", "http://wspruebas1.azurewebsites.net/CaptchaService.asmx", false);
      // xhttp.setRequestHeader("Content-type", "text/html");
      // xhttp.send(xml2);

      var formData = new FormData();

      formData.append("codSys", "Groucho");
      formData.append("cui", "1840423991412");
      formData.append("fechaNacimiento", "1925-09-03");

      var xhr = new XMLHttpRequest();
      xhr.open("POST", "http://wspruebas1.azurewebsites.net/CaptchaService.asmx?op=Transacciones1");
      xhr.setRequestHeader("Content-type", "text/xml");
      //xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
      xhr.setRequestHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
      
      
      xhr.send(xml);

      console.log("Respuesta del server ", xhr.response);
      var response = JSON.parse(xhr.response);
      //alert(xhttp.response);
      console.log("Respuesta del server ", response);
      return response;
    } catch (error) { alert(error.message); }
  }

}
