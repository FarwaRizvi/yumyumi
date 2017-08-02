import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-monday',
  templateUrl: 'monday.html',
})
export class Monday
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