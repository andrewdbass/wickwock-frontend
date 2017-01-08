import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { Http, Response, Headers, RequestOptions,Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MetaService } from 'ng2-meta';

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
  private img: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: Http,
    private metaService: MetaService
  ) {}

  ngOnInit() {

    //Im going to have to pass any datat that i want to share in as paramaters, might as well ditch the whole api callve

    // this.metaService.setTitle("ARGH!");

    // this.metaService.setTag("og:description", this.route.params.value );
    console.log(this.route.params.value)
    console.log(this.route.queryParams)
    // consloe.log(this.route)
    // videoId = this.route.params.value.id
    // print(videoId)
    this.url = "https://www.wickwock.com/api/videos/?id=" + this.route.params.value.id
    this.http.get(this.url)
      .map(response => response.json())
      .subscribe( (res) => {
        console.log(res)
        this.video = res.results[0]
        this.tag = video.tags[0]
        // this.metaService.setTag("og:title", "ARGH!");
        this.img = "http://www.ancient.eu/uploads/images/preview-1225.jpg"
        this.metaService.setTag('og:image', 'http://www.ancient.eu/uploads/images/preview-1225.jpg');
      });
  }

}
