import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions,Jsonp } from '@angular/http';


@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.css']
})
export class PodcastsComponent implements OnInit {
  @Input() time: EventEmitter<any>;
  @Input() defaultTime: any;
  public emptyStateMessages =[
    "Bored at work? Set the timer and we will serve up some awesome content.",
    "Sitting on the john? Pick a time and we will find the perfect thing to listen to.",
    "At a party and wishing you weren't? Choose a time and we will find something for you to do."
  ]
  public emptyStateMessageIndex = 0;
  private podcasts = [];
  private response: any;

  private active = {};
  private playing: boolean;

  constructor(
    private http: Http
  ) {}
  private playPodcast(podcast,){
    if(this.active.id === podcast.id){
      this.active.widget.play()
    }
    else{
      if(this.active.id ){
        this.active.widget.pause();
      }
      this.active.widget = new Audio(podcast.link);
      this.active.id = podcast.id
      this.active.widget.play()
    }
    this.active.playing = true

  }
  private pausePodcast(){
    this.active.widget.pause();
    this.active.playing = false

  }
  private loadMore(){
    // this.articles = [].concat.apply([], this.articles);
    console.log(this.response.next)
    this.http.get(this.response.next)
      .map(response => response.json())
      .subscribe( (res) => {
        this.response = res
        console.log(res)
        this.podcasts = this.podcasts.concat(res.results)
      });
  }
  ngOnInit() {
    this.emptyStateMessageIndex = Math.floor(Math.random()*(this.emptyStateMessages.length))
    this.time.subscribe( (t)=>{
      this.http.get('https://www.wickwock.com/api/podcasts/?duration='+t)
      //this.http.get('http://127.0.0.1:8000/api/podcasts/?duration='+t)
        .map(response => response.json()).subscribe((res)=>{
          console.log(res)
          this.response = res
          this.podcasts = res.results
          if( this.active.id ){
            this.active.widget.pause();
            this.active = {};
          }
        });
    });
    this.time.emit(this.defaultTime)
    var me = this
    $(window).scroll(function() {
       if($(window).scrollTop() + $(window).height() == $(document).height()) {
          me.loadMore()
       }
    });
  }

}
