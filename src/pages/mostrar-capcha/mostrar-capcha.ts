import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { TseProvider } from '../../providers/tse/tse';
import { ResultadoConsultaPage } from '../resultado-consulta/resultado-consulta';


/**
 * Generated class for the MostrarCapchaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'mostrar-capcha-page'
})
@Component({
  selector: 'page-mostrar-capcha',
  templateUrl: 'mostrar-capcha.html',
})
export class MostrarCapchaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private tseProv: TseProvider, private alertCtrl: AlertController,  public loadingCtrl: LoadingController) {
    this.capcha =navParams.data.capcha;
    this.base64Image = "data:image/jpeg;base64," + this.capcha.imagen;
    //console.log("LLego capcha", this.capcha);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MostrarCapchaPage');
  }
  public capcha: any = {
    codigo: "",
    imagen: "",
    transaccion: ""
  };

  public respuestaCapcha: any={
    codigo: "",
    mensaje: "",
    muestraMensaje: false,
    data:{
      boleta :"",
      dpi :"",
      nombre :"",
      fechaNacimiento :"",
      numeroMesa :"",
      pagina :"",
      linea :"",
      centro :"",
      direccion :"",
      departamento :"",
      municipio :"",
    }
  }
  public validarCapcha :any ={
    codSys : "",
    codigoCapcha: "",
    transaccion: ""
  }

  public loader =null;
  public codigoCap ="";
  base64Image = "";

  onSubmit():void{

    console.log("Enviando datos ")
    this.validarCapcha.transaccion = this.capcha.transaccion;
    this.validarCapcha.codigoSistema="ef1b058bc386";
    this.validarCapcha.codigoCapcha = this.codigoCap;
    this.loader = this.loadingCtrl.create({
      content: "Cargando",
    });
    this.loader.present();
    this.tseProv.validarCapcha(this.validarCapcha).then(res=>{
      this.respuestaCapcha=res;
      this.loader.dismiss();
      if (this.respuestaCapcha.muestraMensaje ==true){
        let alert = this.alertCtrl.create({
          title: 'Error',
          //subTitle: '10% of battery r',
          message: this.respuestaCapcha.mensaje,
          buttons: ['Aceptar']
        });
        alert.present();
      }
      this.navCtrl.push(ResultadoConsultaPage, {
        'res':this.respuestaCapcha.data
      })

    }).catch(err=>{
      this.loader.dismiss();
      console.log("Surgio un error ", err)
      let alert = this.alertCtrl.create({
        title: 'Error',
        //subTitle: '10% of battery r',
        message: this.respuestaCapcha.mensaje,
        buttons: ['Aceptar']
      });
      alert.present();
    })

  }

}
