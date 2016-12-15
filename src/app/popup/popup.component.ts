import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  public showPopup = false;
  public timesOpenend = 0
  constructor() { }
  private closePopup(){
    this.showPopup = false;
    this.timesOpened = this.timesOpened +1
  }
  ngOnInit() {
    setInterval(()=>{
      if(this.timesOpened < 1){
        this.showPopup = true;
      }
    },100)
  }

}
