import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { SoapProvider } from '../../providers/soap/soap';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private soap: SoapProvider) {
  }

  public fechaNacimiento = {model: ""};
  public dpi = {model:""};

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onSubmit():void{ 
    console.log("Ha presionado el boton  Consultar");
    if(this.dpi.model==null || this.dpi.model=='' || this.fechaNacimiento.model==null ||this.fechaNacimiento.model==''){
      this.presentAlert();
      
    }
    else{
      console.log("Informacion correcta");
      this.soap.validarDpi(this.dpi.model, this.fechaNacimiento.model).then(res=>{
        console.log("Respuesta del provider ", res);
        if(res==true){
          let alert = this.alertCtrl.create({
            title: 'Aviso',
            subTitle: 'Verificacion Exitosa',
            buttons: ['Aceptar']
          });
          alert.present();
        }
        else {
          let alert = this.alertCtrl.create({
            title: 'Aviso',
            subTitle: 'Los datos ingresados no son validos',
            buttons: ['Aceptar']
          });
          alert.present();
        }
      
      }).catch(function(err) {
        console.log("La promesa retorno error");
        this.presentAlert();
    })

    }
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Aviso',
      subTitle: 'La información ingresada es incorrecta, por favor verifique',
      buttons: ['Aceptar']
    });
    alert.present();
  }

  onSubmit2(){
    console.log("Se presiono submit 2");
    console.log(this.soap.GetPeople());
   
  }
  

}
