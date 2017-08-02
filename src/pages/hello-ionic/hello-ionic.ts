
import { Component } from '@angular/core';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage
{
  constructor() {
    this.myDate= new Date().toISOString();
    console.log(this.myDate);
    console.log(Date.now()+30);
  }

  print()
  {
      console.log(this.myDate);
      console.log(new Date().getDate() + 3);
      console.log(new Date().getDate());
      console.log(new Date().getMonth() + 3);
      console.log(new Date().getMonth());
  }

    var tt = document.getElementById('txtDate').value;

    var date = new Date(tt);
    var newdate = new Date(date);

    newdate.setDate(newdate.getDate() + 3);

    var dd = newdate.getDate();
    var mm = newdate.getMonth() + 1;
    var y = newdate.getFullYear();

    var someFormattedDate = mm + '/' + dd + '/' + y;
    document.getElementById('follow_Date').value = someFormattedDate;
}
