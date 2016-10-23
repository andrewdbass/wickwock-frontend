import { Component, OnInit, Input, EventEmitter } from '@angular/core';
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
  public articles = [];
  constructor(
    private http: Http
  ) { }

  ngOnInit() {
    this.time.subscribe((t)=>{
      console.log("start")
      this.http.get('http://localhost:3000/articles')
      //this.http.get('/articles')
        .map(response => response.json())
        .subscribe((res)=>{
          var arr = [];
          for (var key in res.payload.references.Post){
            if(res.payload.references.Post[key].virtuals.readingTime < t){
              console.log(res.payload.references.Post[key])
              arr.push(res.payload.references.Post[key])
            }
          }
          this.articles = arr;
          arr = []
          console.log("finish")

        })
    })
    this.time.emit(this.defaultTime)
  }
}




/*this.http.get('http://localhost:3000/articles')
  .map(response => response.json()).subscribe((r)=>{
    let arr = []
    for (var key in r.payload.references.Post) {
      if (r.payload.references.Post.hasOwnProperty(key)){
        if(r.payload.references.Post[key].virtuals.readingTime < time){
          arr.push(r.payload.references.Post[key])
          console.log(r.payload.references.Post[key])
        }
      }
    }
    this.articles = arr;
    console.log(this.articles)
  })*/
