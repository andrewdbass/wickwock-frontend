import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions,Jsonp } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { SafePipe } from '../safe.pipe'
import 'rxjs/Rx';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  @Input() time: EventEmitter<any>;
  @Input() defaultTime:any;
  public videos = [];
  public response: any;
  public emptyStateMessages =[
    "Bored at work? Set the timer and we will serve up some awesome content.",
    "Sitting on the john? Pick a time and we will find the perfect thing to read.",
    "At a party and wishing you weren't? Choose a time and we will find something for you to do."
  ]
  public emptyStateMessageIndex = 0;
  constructor(
    private http: Http
  ) { }
  showVideo(id) {
    for(let video of this.videos){
      if(video.id == id){
        video.showPlayer = true
      }
    }
  }
  private loadMore(){
    // this.articles = [].concat.apply([], this.articles);
    console.log(this.response.next)
    this.http.get(this.response.next)
      .map(response => response.json())
      .subscribe( (res) => {
        this.response = res
        this.videos = this.videos.concat(res.results)
      });
  }
  ngOnInit() {
    this.emptyStateMessageIndex = Math.floor(Math.random()*(this.emptyStateMessages.length))
    this.time.subscribe((r)=>{
      console.log("CHANGE "+ r)
      //this.http.get('https://www.wickwock.com/api/videos?duration='+r)
       this.http.get('http://127.0.0.1:8000/api/videos?duration='+r)
        .map(response => response.json()).subscribe((res)=>{
          this.response = res
          this.videos = res.results;
          console.log(this.videos)
        })
    })
    this.time.emit(this.defaultTime)
    var me = this
    $(window).scroll(function() {
       if($(window).scrollTop() + $(window).height() == $(document).height()) {
          me.loadMore()
       }
    });
  }
}
