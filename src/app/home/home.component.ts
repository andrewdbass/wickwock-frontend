import { Component, EventEmitter, OnInit} from '@angular/core';
import { SliderComponent } from '../slider/slider.component'
import { ArticlesComponent } from '../articles/articles.component'
import { VideosComponent } from '../videos/videos.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public stime = new EventEmitter();
  public tags = new EventEmitter();
  public sliderTime = 0;
  public tagsList: any;
  public articlesSelected = true;
  public videosSelected = false;
  public podcastsSelected = false;
  public setTime = new EventEmitter();
  public showMenu = false;
  public emptyStateMessages =[
    "Bored at work? Set the timer and we will serve up some awesome content.",
    "Sitting on the john? Pick a time and we will find the perfect thing to read.",
    "At a party and wishing you weren't? Choose a time and we will find something for you to do."
  ]
  public emptyStateMessageIndex = 0;
  constructor(){

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
  public setSliderTime(time) {
    this.setTime.emit(time);
  }
  public toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  ngOnInit(){
    this.stime.emit(1)
    this.emptyStateMessageIndex = Math.floor(Math.random()*(this.emptyStateMessages.length))
  }
}
