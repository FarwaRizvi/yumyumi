import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Calendar } from '@ionic-native/calendar';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { Monday } from '../pages/monday/monday';
import { Tuesday } from '../pages/tuesday/tuesday';
import { Wednesday } from '../pages/wednesday/wednesday';
import { Thursday } from '../pages/thursday/thursday';
import { Friday } from '../pages/friday/friday';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Calendar,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
