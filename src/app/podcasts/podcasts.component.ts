import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions,Jsonp } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.css']
})
export class PodcastsComponent implements OnInit {
  @Input() time: EventEmitter<any>;
  @Input() defaultTime:any;
  @Input() defaultTags:any;
  @Input() tags: EventEmitter<any>;
  public timeValue: number;
  public tagsValue =[];

  public emptyStateMessages =[
    {
      title: "Bored at work?",
      message: "Set the timer and we will serve up some awesome content."
    },
    {
      title: "Sitting on the john?",
      message: "Pick a time and we will find the perfect thing to read."
    },
    {
      title: "At a party and wishing you weren't?",
      message: "Choose a time and we will find something for you to do."
    }
  ]
  public emptyStateMessageIndex = 0;
  private podcasts = [];
  private nextnextRequest = {}
  public lastRequestedUrl = ""
  private active = {};
  private playing: boolean;
  public loading = false;


  constructor(
    private http: Http
  ) {}
  private loadMore(){
    if (this.lastRequestedUrl !== this.nextRequest.next) {
      this.lastRequestedUrl = this.nextRequest.next
      this.loading = true;
      this.http.get(this.nextRequest.next)
        .map(response => response.json())
        .subscribe( (res) => {
          console.log(res)
          this.podcasts = this.podcasts.concat(res.results)
          this.nextRequest = res
          this.loading = false;
          // this.nextPage++
          // this.nextRequest.next = this.nextRequest.next.substring(0, this.nextRequest.length-2)+this.nextPage
        });
    }
  }
  ngOnInit() {
    this.emptyStateMessageIndex = Math.floor(Math.random()*(this.emptyStateMessages.length))
    let change = Observable.merge(this.time, this.tags);
    change.subscribe((c)=>{
      if (typeof c !=="undefined" && typeof c !== 'number') {
        this.tagsValue = c
      }
      else if(typeof c === "number") {
        this.timeValue = c
      }
      // else console.log(c)
      console.log(this.tagsValue)
      if(this.timeValue===60){
        this.timeValue = 1000000
      }
      var url ='https://m.wickwock.com/api/podcasts/?duration='+this.timeValue
      for(let tag of this.tagsValue) {
        url = url + "&tags="+ tag.id
      }
      console.log(url)
      this.http.get(url)
        .map(response => response.json())
        .subscribe((res)=>{
          this.podcasts = res.results
          this.nextRequest = res
          this.lastRequestedUrl = 'https://m.wickwock.com/api/podcasts/?duration='+this.timeValue
          });
      })
      this.tags.emit(this.defaultTags)
      this.time.emit(this.defaultTime)
    var me = this
    $(window).scroll(function() {
       if($(window).scrollTop() + $(window).height() == $(document).height()) {
          me.loadMore()
       }
    });
  }

}
