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
  setMetaTags() {
    setTimeout(() => {
      this.metaService.setTitle(this.route.params.value.title);
    });
    // this.metaService.setTitle(this.route.params.value.title);
    this.metaService.setTag('og:description', "And other cool things on Wick Wock");
    //need to add in title and image data to the url
    this.metaService.setTag('og:url', "https://www.wickwock.com/video/" +
    this.route.params.value.id + ";title=" +
    this.route.params.value.title + ";image=" +
    this.route.params.value.image);
    let imgUrl = this.route.params.value.image;
    imgUrl = imgUrl.replace("***",".")
    imgUrl = imgUrl.replace("***",".")
    imgUrl = imgUrl.replace("***",".")
    imgUrl = imgUrl.replace("***",".")
    this.metaService.setTag('og:image', imgUrl);

  }
  ngOnInit() {

    this.setMetaTags();


    console.log(this.route.params.value)

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
