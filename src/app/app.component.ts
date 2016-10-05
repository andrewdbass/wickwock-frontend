import { Component, EventEmitter, OnInit} from '@angular/core';
import { SliderComponent } from './slider/slider.component'
import { ArticlesComponent } from './articles/articles.component'
import { VideosComponent } from './videos/videos.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public stime = new EventEmitter();
  public sliderTime = 0;
  public articlesSelected = true;
  public videosSelected = false;
  public podcastsSelected = false;
  constructor(){

  }
  public newTime(event){
    this.stime.emit(event.value)
    this.sliderTime = event.value
  }
  public articles(){
    console.log("articles")
    //change bar
    this.articlesSelected = true;
    this.videosSelected = false;
    this.podcastsSelected = false;

  }
  public videos(){
    console.log(this.sliderTime)
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
  ngOnInit(){
    this.stime.emit(1)
  }
}
