import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { TseProvider } from '../../providers/tse/tse';
import { MostrarCapchaPage } from '../mostrar-capcha/mostrar-capcha';
import { SolicitudModel } from '../../models/solicitud-model';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private tseProv: TseProvider
  ,private alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IngresarSolicitudPage');
  }
 // public resMd = new RespuestaModel('','',false);
   public solicitud = new SolicitudModel('ef1b058bc386','1840423991412','1925-09-03');

   public respuestaCapcha: any={
    codigo: "",
    mensaje: "",
    muestraMensaje: false,
    data:{
      transaccion: "",
      codigoCapcha: "",
      codigoSistema:"",
    }
  }
  public loader =null;

  onSubmit(): void{

    console.log("Ha presionado el boton  Consultar");
      this.solicitud.codSys ="ef1b058bc386";
      console.log("Se enviara ", this.solicitud);
      //iniciamos el loader
        this.loader = this.loadingCtrl.create({
          content: "Cargando",
        });
        this.loader.present();
      this.tseProv.getCapcha(this.solicitud).then(res=>{
        this.respuestaCapcha = res;
        //cerramos el loader
        this.loader.dismiss();
        //enviamos los datos a otra pagina
        if (this.respuestaCapcha.muestraMensaje ==true){
          let alert = this.alertCtrl.create({
            title: 'Error',
            //subTitle: '10% of battery r',
            message: this.respuestaCapcha.mensaje,
            buttons: ['Aceptar']
          });
          alert.present();
        }
        this.navCtrl.push(MostrarCapchaPage, {
          'capcha': this.respuestaCapcha.data
        })
      }).catch(err=>{
        this.loader.dismiss();
        console.error(err);
        let alert = this.alertCtrl.create({
          title: 'Error',
          //subTitle: '10% of battery r',
          message: err.message,
          buttons: ['Aceptar']
        });
        alert.present();
      })
    }

  }
