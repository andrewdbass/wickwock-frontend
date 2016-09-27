import { Component} from '@angular/core';
import { SliderComponent } from './slider/slider.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public articlesSelected = true;
  public videosSelected = false;
  public podcastsSelected = false;
  constructor(){

  }
  public articles(){
    console.log("articles")
    //change bar
    this.articlesSelected = true;
    this.videosSelected = false;
    this.podcastsSelected = false;

  }
  public videos(){
    console.log("videos")
    //change bar
    this.articlesSelected = false;
    this.videosSelected = true;
    this.podcastsSelected = false;
  }
  public podcasts(){
    console.log("podcasts")
    //change bar
    this.articlesSelected = false;
    this.videosSelected = false;
    this.podcastsSelected = true;
  }
}
