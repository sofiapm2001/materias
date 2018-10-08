import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { CsPage } from '../cs/cs';
import { DibPage } from '../dib/dib';
import { PyePage } from '../pye/pye';
import { ProgramacionPage } from '../programacion/programacion';
import { ComPage } from '../com/com';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historia = HistoriaPage;
  cs = CsPage;
  dib = DibPage;
  pye = PyePage
  progra = ProgramacionPage
  com = ComPage

  constructor(public navCtrl: NavController) {

  }
  clickHistoria(){
    this.navCtrl.push(this.historia);
  }
  clickCiencias(){
    this.navCtrl.push(this.cs);
  }
  clickDibujo(){
    this.navCtrl.push(this.dib);
  }
  clickpye(){
    this.navCtrl.push(this.pye);
  }
  clickprogra(){
    this.navCtrl.push(this.progra);
  }
  clickcom(){
    this.navCtrl.push(this.com);
  }

}
