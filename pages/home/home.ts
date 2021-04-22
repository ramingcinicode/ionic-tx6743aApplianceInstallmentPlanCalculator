
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
  price: number;
  da: number;
  la: number;
  mp: number;
  tip: number;
  months: number;
  
  calculateDA(){
    this.da = this.price * 0.40;
    this.da = parseFloat(this.da.toFixed(2));
  }

  calculateLA(){
    this.la = this.price - this.da;
    this.la = parseFloat(this.la.toFixed(2));
  }

  calculateTIP (){
    this.tip = (this.la * (3.90/100)) * this.months;
  }

  calculateMA (){
    this.ma = (this.la + this.tip) / this.months;
  }


  constructor(public navCtrl: NavController) {

  }

}