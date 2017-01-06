import { Component, EventEmitter, OnInit} from '@angular/core';
import { SliderComponent } from './slider/slider.component'
import { ArticlesComponent } from './articles/articles.component'
import { VideosComponent } from './videos/videos.component'
import { HomeComponent } from './home/home.component';

import { MetaService } from 'ng2-meta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public stime = new EventEmitter();
  public tags = new EventEmitter();
  public sliderTime = 0;
  public tagsList: any;
  public articlesSelected = true;
  public videosSelected = false;
  public podcastsSelected = false;
  public refresh = new EventEmitter();
  public showMenu = false;
  constructor(private metaService: MetaService){

  }
  public newTime(event){
    this.stime.emit(event.value)
    this.sliderTime = event.value
  }
  public changeSelectedTags(event){
    this.tagsList = event;
    console.log(this.tagsList)
    this.tags.emit(event)
    console.log(event)
  }
  public articles(){
    console.log("articles")
    //change bar
    this.articlesSelected = true;
    this.videosSelected = false;
    this.podcastsSelected = false;
    this.stime.emit(this.sliderTime)

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
  public refreshTime() {
    this.refresh.emit(true);
  }
  public toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  ngOnInit(){
    this.stime.emit(1)
  }
}
