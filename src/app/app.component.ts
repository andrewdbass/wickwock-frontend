import { Component, EventEmitter, OnInit} from '@angular/core';
import { SliderComponent } from './slider/slider.component'
import { ArticlesComponent } from './articles/articles.component'
import { VideosComponent } from './videos/videos.component'
import { HomeComponent } from './home/home.component'

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
  constructor(){

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
