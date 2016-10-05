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
  @Input() time: EventEmitter;
  @Input() defaultTime:any;
  public videos = [];
  constructor(private http: Http) { }
  showVideo(id) {
    console.log(id)
  }
  ngOnInit() {
    this.time.subscribe((r)=>{
      console.log("CHANGE "+ r)
      this.http.get('http://localhost:3000/videos?time='+r)
        .map(response => response.json()).subscribe((res)=>{
          this.videos = res.items;
          console.log(this.videos)
        })
    })
    this.time.emit(this.defaultTime)
  }
}
