import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messageData:string = "welcome to child component";
  tempdata:string = "";

  newmessage($event:any){
    this.tempdata = $event;
  }

}
