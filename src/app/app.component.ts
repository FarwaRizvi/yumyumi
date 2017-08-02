import { Component, ViewChild } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

declare var window;

@Component({
  templateUrl: 'app.html'
})
export class MyApp
{
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{title: string, component: any}>;
  // prep some variables
  startDate: Date = new Date(Date.now()); // beware: month 0 = january, 11 = december
  endDate: Date = new Date(Date.now());
  title: string = "My nice event";
  eventLocation: string = "Home";
  notes: string = "Some notes about this event.";

  constructor(
    public c: Calendar,
    private iab: InAppBrowser,
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // create a calendar (iOS only for now)
    this.c.createCalendar('MyCalendar').then(
      (msg) => { console.log(msg); },
      (err) => { console.log(err); }
    );

    //var createCalOptions = this.c.getCreateCalendarOptions();
    //createCalOptions.calendarName = "My Cal Name";
    //createCalOptions.calendarColor = "#FF0000"; // an optional hex color (with the # char), default is null, so the OS picks a color
    //this.c.createCalendar(createCalOptions).then(
    //  (msg) => { console.log(msg); },
    //  (err) => { console.log(err); }
    //);
    //this.c.openCalendar(new Date());

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.iab.create('http://www.92101urbanliving.com/','random_string', 'zoom = no, location = no,  hardwareback = no, toolbar = no');
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

    successCall()
    {
      alert("success");
    }

    failCall()
    {
      alert("fail");
    }
}
