import { Component, OnInit, Input, EventEmitter, } from '@angular/core';
import { Http, Response, Headers, RequestOptions,Jsonp } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})

export class ArticlesComponent implements OnInit {
  @Input() time: EventEmitter<any>;
  @Input() defaultTime:any;
  @Input() defaultTags:any;
  @Input() tags: EventEmitter<any>;
  public timeValue: number;
  public tagsValue =[];
  public articles = [];
  public nextRequest = ""
  public nextPage = 1
  public emptyStateMessages =[
    "Bored at work? Set the timer and we will serve up some awesome content.",
    "Sitting on the john? Pick a time and we will find the perfect thing to read.",
    "At a party and wishing you weren't? Choose a time and we will find something for you to do."
  ]
  public lastRequestedUrl = ""
  public emptyStateMessageIndex = 0;
  public loading = false;
  constructor(
    private http: Http
  ) { }
  private loadMore(){
    if (this.lastRequestedUrl !== this.nextRequest.next) {
      this.lastRequestedUrl = this.nextRequest.next
      this.loading = true;
      this.http.get(this.nextRequest.next)
        .map(response => response.json())
        .subscribe( (res) => {
          console.log(res)
          this.articles = this.articles.concat(res.results)
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
      var url =' http://127.0.0.1:8000/api/articles/?duration='+this.timeValue
      for(let tag of this.tagsValue) {
        url = url + "&tags="+ tag.id
      }
      console.log(url)
      this.http.get(url)
        .map(response => response.json())
        .subscribe((res)=>{
          this.articles = res.results
          this.nextRequest = res
          this.lastRequestedUrl = 'https://www.wickwock.com/api/articles/?duration='+this.timeValue
          });
      })
      this.tags.emit(this.defaultTags)
      this.time.emit(this.defaultTime)
      var me = this
      $(window).scroll(function() {
        console.log(($(window).scrollTop() + $(window).height()) + "  " + $(document).height())
         if($(window).scrollTop() + $(window).height() + 3 >= $(document).height()) {
            me.loadMore()
            console.log("CALLED")
         }
      });
  }
}
