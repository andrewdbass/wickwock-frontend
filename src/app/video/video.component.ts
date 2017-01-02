import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { Http, Response, Headers, RequestOptions,Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { NGMeta } from 'ngmeta';

import 'rxjs/Rx';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  private video= {}
  private tag = "";
  // private video= new EventEmitter();
  private url: string;
  private clock = Observable.interval(1000)
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: Http,
    private ngmeta: NGMeta,
  ) {}

  ngOnInit() {
    console.log(this.route.params.value)
    // videoId = this.route.params.value.id
    // print(videoId)
    this.url = "https://www.wickwock.com/api/videos/?id=" + this.route.params.value.id
    this.http.get(this.url)
      .map(response => response.json())
      .subscribe( (res) => {
        console.log(res)
        this.video = res.results[0]
        this.tag = video.tags[0]
        this.ngmeta.setHead({
          name: [
            {
              type: "og:url",
              content: "https://wickwock.com/vidoes"+this.video.id
            },
            {
              type: "og:title",
              content: this.video.title
            },
            {
              type: "og:description",
              content: "Cool Video found on Wick Wock"
            },
            {
              type: "og:image",
              content: "http://vignette2.wikia.nocookie.net/newpotco/images/1/1e/Jolly-roger.png"
            },
          ],
        });
      });
  }

}
