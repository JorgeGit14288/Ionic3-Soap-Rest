import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TseProvider } from '../../providers/tse/tse';
import { MostrarCapchaPage } from '../mostrar-capcha/mostrar-capcha';



//importamos las paginas a utilizar


/**
 * Generated class for the IngresarSolicitudPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ingresar-solicitud',
  templateUrl: 'ingresar-solicitud.html',
})
export class IngresarSolicitudPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private tseProv: TseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IngresarSolicitudPage');
  }
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

  onSubmit(): void{
    console.log("Ha presionado el boton  Consultar");
      this.solicitud.codSys ="ef1b058bc386";
      console.log("Se enviara ", this.solicitud);
      this.tseProv.getCapcha(this.solicitud).then(res=>{
        console.log("Devolvio data", res);
        //enviamos los datos a otra pagina
        this.navCtrl.push(MostrarCapchaPage, {
          'capcha': res
        })
        /*
          this.user = res;
          this.base64Image = "data:image/jpeg;base64," + this.user.imagen;
*/
      }).catch(err=>{
        console.log("Se devolvio un error");
        console.error(err);
      })
    }

  }
