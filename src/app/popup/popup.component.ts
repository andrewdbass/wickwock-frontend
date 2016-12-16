import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  public showPopup = false;
  public openend = false;
  constructor() { }
  private closePopup(){
    this.showPopup = false;
    this.opened = true;
  }
  ngOnInit() {
    setInterval(()=>{
      if(!this.opened){
        this.showPopup = true;
      }
    },100)
  }

}
