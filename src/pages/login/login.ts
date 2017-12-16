import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { AngularFireAuthModule,AngularFireAuth, } from 'angularfire2/auth';
import { HomePage } from '../home/home';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  list: AngularFireList<any>; 
  password:string;
  username:string;
  constructor(private navCtrl: NavController, private navParams: NavParams, private af: AngularFireDatabase,
    private _auth:AngularFireAuth) {
      this.list= af.list('/MascotasFinal');
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  /**
 * @param {string} Usuario - Usuario con el cual ingresas al sistema
 * @param {string} Clave  -  Clave que corresponde al usuario enviado
 * @example Usuario:Leandro Clave:Lisandro123
 * @returns Id:{Integer}  Nombre:{String}  TipoPerfil:{String}  UrlFoto:{String} 
 * 
 * */
  async login(Usuario:string,Clave:string)
  {
          
        await this._auth.auth.signInWithEmailAndPassword(this.username,this.password)
                        .then(result => { 
                          var Observable = this.list.snapshotChanges(['child_added'])
                          .subscribe(actions => {
                            this.navCtrl.setRoot(HomePage)
                          }
                        )})
                        .catch(error =>{alert("Error al ingresar!")})     
                       }
  }