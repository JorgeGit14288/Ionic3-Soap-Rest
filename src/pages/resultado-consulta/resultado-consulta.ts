import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResultadoConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultado-consulta',
  templateUrl: 'resultado-consulta.html',
})
export class ResultadoConsultaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.datosVotacion = navParams.data.res;
  }

  public datosVotacion: any ={
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


  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadoConsultaPage');
  }



}
