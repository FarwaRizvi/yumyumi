import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  Breakfast: boolean = true;
  Lunch: boolean = false;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  myDate: String;

  constructor(public navCtrl: NavController, public navParams: NavParams)
  {
    this.myDate= new Date().toISOString();

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
