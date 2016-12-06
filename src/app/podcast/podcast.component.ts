import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { Http, Response, Headers, RequestOptions,Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.css']
})
export class PodcastComponent implements OnInit {
  private url:string
  private podcast= new EventEmitter();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: Http,
  ) {}

  ngOnInit() {
    console.log(this.route.params.value)
    // videoId = this.route.params.value.id
    // print(videoId)
    this.url = "http://www.wickwock.com/api/podcasts?id=" + this.route.params.value.id
    this.http.get(this.url)
      .map(response => response.json())
      .subscribe( (res) => {
        console.log(res)
        this.podcast.emit(res.results[0])
      });
  }

}
