import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions,Jsonp } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  constructor(private http: Http, private jsonp:Jsonp) { }
  getArticles(){
    console.log("called")
    this.http.get('http://localhost:3000/articles')
      .map(response => response.json()).subscribe((r)=>{
        //console.log(r)
        console.log(r.payload.references.Post)
      })
  }
  ngOnInit() {
    this.getArticles()

  }

}
