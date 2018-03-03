import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";

import { HttpProvider } from "../../providers/http/http";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private httpProv: HttpProvider
  ) {}

  public solicitud: any = {
    codSys: "",
    cui: "1840423991412",
    fechaNacimiento: "1925-09-03"
  };
  public user: any = {
    codigo: "",
    imagen: "",
    transaccion: ""
  };
  base64Image = "";

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  onSubmit(): void {
    console.log("Ha presionado el boton  Consultar");
      console.log("Informacion correcta");
      this.solicitud.codSys ="ef1b058bc386";
      console.log("Se enviara ", this.solicitud);
/*
      this.httpProv.test().then(res=>{
        console.log("Devolvio respuesta ", res)
      }).catch(err=>{
        console.log("Surgio un error ", err)
      })
*/
      this.httpProv.getCapcha2(this.solicitud).then(res=>{
        console.log("Devolvio data", res);
          this.user = res;
          this.base64Image = "data:image/jpeg;base64," + this.user.imagen;
      }).catch(err=>{
        console.log("Se devolvio un error");
        console.error(err);
      })
      /*
      this.httpProv.getCapcha(this.solicitud).subscribe(
        data => {
          console.log("Devolvio data", data);
          this.user = data;
          this.base64Image = "data:image/jpeg;base64," + this.user.imagen;
        },
        error => {
          console.log("Se devolvio un error");
          console.error(error);
        }
      );
      */
    }
}
