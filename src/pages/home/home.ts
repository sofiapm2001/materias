import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { CsPage } from '../cs/cs';
import { DibPage } from '../dib/dib';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historia = HistoriaPage;
  cs = CsPage;
  dib = DibPage;

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

}
