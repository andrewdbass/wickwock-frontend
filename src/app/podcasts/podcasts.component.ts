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

  private podcasts = [];
  private data = []

  private active;
  private playing: boolean;

  constructor(
    private http: Http
  ) {}
  private listenForChange() {
    this.time.subscribe((t) => {
      this.podcasts = this.data.filter((r) => {
        return r.enclosure.duration/60 <= t && r.enclosure.duration;
      })
    })
  }
  private playPodcast(podcast,){
    if(this.active){
      this.active.play()
    }
    else{
      this.active = new Audio(podcast);
      this.active.play()
    }
    this.playing = true

  }
  private pausePodcast(){
    this.active.pause();
    this.playing = false

  }
  ngOnInit() {
    console.log("starting")
    this.http.get('http://localhost:3000/podcasts')
    //this.http.get('/podcasts')
      .map(response => response.json()).subscribe((res)=>{
        console.log(res)
        this.data = res.channel.item
        this.podcasts = this.data.filter((r) => {
          return r.enclosure.duration/60 < this.defaultTime && r.enclosure.duration;
        })
        this.listenForChange();
      })
  }

}
