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
  @Input() tags: EventEmitter<any>;
  @Input() defaultTags: any;

  public timeValue: number;
  public tagsValue =[];
  public videos = [];
  public response: any;
  public lastRequestedUrl = ""
  public nextRequest = ""

  public emptyStateMessages =[
    "Bored at work? Set the timer and we will serve up some awesome content.",
    "Sitting on the john? Pick a time and we will find the perfect thing to read.",
    "At a party and wishing you weren't? Choose a time and we will find something for you to do."
  ]
  public emptyStateMessageIndex = 0;
  public loading = false;

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
    if (this.lastRequestedUrl !== this.nextRequest.next) {
      this.lastRequestedUrl = this.nextRequest.next
      this.loading = true;
      this.http.get(this.nextRequest.next)
        .map(response => response.json())
        .subscribe( (res) => {
          console.log(res)
          this.videos = this.videos.concat(res.results)
          this.nextRequest = res
          this.loading = false;
          // this.nextPage++
          // this.nextRequest.next = this.nextRequest.next.substring(0, this.nextRequest.length-2)+this.nextPage
        });
    }
  }
  ngOnInit() {
    this.emptyStateMessageIndex = Math.floor(Math.random()*(this.emptyStateMessages.length))

    let changes = Observable.merge(this.time, this.tags);
    changes.subscribe((c)=>{
      if (typeof c !=="undefined" && typeof c !== 'number') {
        this.tagsValue = c
      }
      else if(typeof c === "number") {
        this.timeValue = c
      }
      // else console.log(c)
      console.log(this.tagsValue)
      var url =' http://127.0.0.1:8000/api/videos/?duration='+this.timeValue
      for(let tag of this.tagsValue) {
        url = url + "&tags="+ tag.id
      }
      console.log(url)
      this.http.get(url)
        .map(response => response.json())
        .subscribe((res)=>{
          this.videos = res.results
          this.nextRequest = res
          this.lastRequestedUrl = url
          });
    })
    this.time.emit(this.defaultTime)
    this.tags.emit(this.defaultTags)
    var me = this
    $(window).scroll(function() {
       if($(window).scrollTop() + $(window).height() == $(document).height()) {
          me.loadMore()
          console.log("CALLED")
       }
    });
  }

}
