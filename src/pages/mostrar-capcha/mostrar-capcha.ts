import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.capcha =navParams.data.capcha;
    this.base64Image = "data:image/jpeg;base64," + this.capcha.imagen;
    console.log("LLego capcha", this.capcha);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MostrarCapchaPage');
  }
  public capcha: any = {
    codigo: "",
    imagen: "",
    transaccion: ""
  };

  public respuestaCapcha ={
    transaccion: "",
    codigoCapcha: "",
    codigoSistema:"",
  }

  public codigoCap ="";
  base64Image = "";

  onSubmit():void{
    this.respuestaCapcha.transaccion = this.capcha.transaccion;
    this.respuestaCapcha.codigoSistema="cs1";
    this.codigoCap = this.codigoCap;



    console.log("Enviando datos ")

  }

}
