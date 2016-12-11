import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { Http, Response, Headers, RequestOptions,Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  private video= {}
  // private video= new EventEmitter();
  private url: string;
  private clock = Observable.interval(1000)
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: Http,
  ) {}

  ngOnInit() {
    console.log(this.route.params.value)
    // videoId = this.route.params.value.id
    // print(videoId)
    this.url = "https://m.wickwock.com/api/videos/?id=" + this.route.params.value.id
    this.http.get(this.url)
      .map(response => response.json())
      .subscribe( (res) => {
        console.log(res)
        this.video = res.results[0]
      });
  }

}
