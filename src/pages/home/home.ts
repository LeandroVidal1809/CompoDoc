import { Component  } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { AngularFireAuthModule,AngularFireAuth, } from 'angularfire2/auth';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Dato:string;
  list: AngularFireList<any>; 
  constructor(private navCtrl: NavController, private af: AngularFireDatabase,
    private _auth:AngularFireAuth) {
      this.list= af.list('/Dato');
  }

 /**
 * @param {string} Dato - Dato guardado en la base de datos
 * @example Dato:Enviando un dato
 * @returns  Mensaje devuelto 
 *   
 *  
 * */
  Enviar(Dato:string):String
  {
    this.list.push(
      {
        "Dato":this.Dato
      }
    ) 
    return "Mensaje enviado exitosamente"
  }

}
