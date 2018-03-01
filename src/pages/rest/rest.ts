import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {HttpProvider} from '../../providers/http/http';

/**
 * Generated class for the RestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rest',
  templateUrl: 'rest.html',
})
export class RestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpProv: HttpProvider) {
  }

  users: any[]= [];
  ionViewDidLoad() {
    console.log('ionViewDidLoad RestPage');

    this.httpProv.getUsers().subscribe((data)=>{
      console.log("Devolvio data", data);
      this.users = data ['results'];
    },(error)=>{
      console.log("Se devolvio un error");
      console.error(error);
    }
  )

  }


}
