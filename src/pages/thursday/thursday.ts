import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-thursday',
  templateUrl: 'thursday.html',
})
export class Thursday
{
  Breakfast: boolean = true;
  Lunch: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams)
  {

  }

  BreakfastList()
  {
    this.Breakfast=true;
    this.Lunch=false;
  }
  LunchList()
  {
    this.Breakfast=false;
    this.Lunch=true;
  }
}
