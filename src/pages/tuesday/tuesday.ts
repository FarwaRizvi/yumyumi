import { Component } from '@angular/core';
import { Calendar } from '@ionic-native/calendar';
import { Monday } from '../monday/monday';
import { Wednesday } from '../wednesday/wednesday';
import { Thursday } from '../thursday/thursday';
import { Friday } from '../friday/friday';
import { LoadingController, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-tuesday',
  templateUrl: 'tuesday.html',
})
export class Tuesday
{
  Boola : boolean = false;
  Boolb : boolean = true;
  Boolc : boolean = false;
  Boold : boolean = false;
  Boole : boolean = false;
  BoolSpan : boolean = false;
  Breakfast: boolean = true;
  Lunch: boolean = false;
  Date= new Date();
  myDate;
  mon= new Date();
  tues= new Date();
  wed= new Date();
  thurs= new Date();
  fri= new Date();
  calendar: any;
  Month: string;
  constructor(public loadingCtrl: LoadingController, public c: Calendar, public navCtrl: NavController, public navParams: NavParams)
  {
        let loading = this.loadingCtrl.create({
        spinner: 'bubbles',
        content: 'Loading Please Wait...',
        });

        loading.present();

        setTimeout(() => {
        loading.dismiss();
        this.BoolSpan=true;
        }, 5000);

        console.log(this.Date.getDate());
        console.log(this.Date.getDay());
        console.log(this.Date.getMonth());
        //console.log(this.Date.add(1).day());

        if(this.Date.getDay()==1)
        {
            this.mon.setDate(this.Date.getDate());
            this.tues.setDate(this.Date.getDate()+1);
            this.wed.setDate(this.Date.getDate()+2);
            this.thurs.setDate(this.Date.getDate()+3);
            this.fri.setDate(this.Date.getDate()+4);
        }
        if(this.Date.getDay()==2)
        {
            this.mon.setDate(this.Date.getDate()-1);
            this.tues.setDate(this.Date.getDate());
            this.wed.setDate(this.Date.getDate()+1);
            this.thurs.setDate(this.Date.getDate()+2);
            this.fri.setDate(this.Date.getDate()+3);
        }

        if(this.Date.getDay()==3)
        {
            this.mon.setDate(this.Date.getDate()-2);
            this.tues.setDate(this.Date.getDate()-1);
            this.wed.setDate(this.Date.getDate());
            this.thurs.setDate(this.Date.getDate()+1);
            this.fri.setDate(this.Date.getDate()+2);
        }

        if(this.Date.getDay()==4)
        {
            this.mon.setDate(this.Date.getDate()-3);
            this.tues.setDate(this.Date.getDate()-2);
            this.wed.setDate(this.Date.getDate()-1);
            this.thurs.setDate(this.Date.getDate());
            this.fri.setDate(this.Date.getDate()+1);
        }

        if(this.Date.getDay()==5)
        {
            this.mon.setDate(this.Date.getDate()-4);
            this.tues.setDate(this.Date.getDate()-3);
            this.wed.setDate(this.Date.getDate()-2);
            this.thurs.setDate(this.Date.getDate()-1);
            this.fri.setDate(this.Date.getDate());
        }
        this.myDate= this.mon.toISOString();
  }

  minus()
  {
      this.mon.setDate(this.mon.getDate()-7);
      this.tues.setDate(this.tues.getDate() - 7);
      this.wed.setDate(this.wed.getDate() - 7);
      this.thurs.setDate(this.thurs.getDate() - 7);
      this.fri.setDate(this.fri.getDate() - 7);
      this.Boola = false;
      this.Boolc= false;
      this.Boolb = false;
      this.Boold = false;
      this.Boole= false;

      this.myDate= this.mon.toISOString();
  }

  plus()
  {
      this.mon.setDate(this.mon.getDate() + 7);
      this.tues.setDate(this.tues.getDate() + 7);
      this.wed.setDate(this.wed.getDate() + 7);
      this.thurs.setDate(this.thurs.getDate() + 7);
      this.fri.setDate(this.fri.getDate() + 7);
      this.Boola = false;
      this.Boolc= false;
      this.Boolb = false;
      this.Boold = false;
      this.Boole= false;

      this.myDate= this.mon.toISOString();
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

  MPage()
  {
    this.navCtrl.setRoot(Monday);
  }

  WPage()
  {
    this.navCtrl.setRoot(Wednesday);
  }

  THPage()
  {
    this.navCtrl.setRoot(Thursday);
  }

  FPage()
  {
    this.navCtrl.setRoot(Friday);
  }

  TuPage()
  {
      this.Boolb= true;
      this.BoolSpan=false;

      let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Loading Please Wait...',
      });

      loading.present();

      setTimeout(() => {
      loading.dismiss();
      this.BoolSpan=true;
      }, 5000);
  }
}
