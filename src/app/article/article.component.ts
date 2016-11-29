import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { Http, Response, Headers, RequestOptions,Jsonp } from '@angular/http';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  private article = {}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    console.log(this.route.params.value)
    articleId = this.route.params.value.id
    url = "http://localhost:8000/api/articles?id=" + articleId
    this.http.get(url)
      .map(response => response.json())
      .subscribe( (res) => {
        console.log(res.results[0])
      });
}
