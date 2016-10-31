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

  public articles = [];
  public response: any;
  public lastRequest: any;
  constructor(
    private http: Http
  ) { }
  private loadMore(){
    // this.articles = [].concat.apply([], this.articles);
    console.log(this.response.next)
    this.http.get(this.response.next)
      .map(response => response.json())
      .subscribe( (res) => {
        this.response = res
        this.articles = this.articles.concat(res.results)
      });
  }
  ngOnInit() {
    this.time.subscribe( (t)=>{
      console.log("start")
      this.http.get('http://104.236.190.91/api/articles/?duration='+t)
      //this.http.get('/articles')
        .map(response => response.json())
        .subscribe((res)=>{
          console.log(res)
          this.response = res;
          this.articles = res.results;
        });


      });
      this.time.emit(this.defaultTime)
      var me = this
      $(window).scroll(function() {
         if($(window).scrollTop() + $(window).height() == $(document).height()) {
            me.loadMore()
         }
      });
  }
}
