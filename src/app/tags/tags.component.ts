import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions,Jsonp } from '@angular/http';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  private tags =[];
  private allSelected = true;
  @Output() selectedTags = new EventEmitter();
  constructor(
    private http: Http
  ) { }
  private changeAllTags(val){
    for(let tag of this.tags){
      console.log(tag.selected)
      if(val) {
        tag.selected = true;
        tag.style = ['tag', 'tag--selected']
        this.allSelected = true
      }
      else{
        tag.selected = false;
        tag.style = ['tag']
        this.allSelected = false;
      }
    }
    this.updateOutput();
  }
  private toggleTag(tag){
    if(tag.style.indexOf("tag--selected") !== -1){
      tag.style = ["tag"]
      tag.selected = false
      this.allSelected = false;
    }
    else{
      tag.style.push("tag--selected")
      tag.selected = true;
    }
    this.updateOutput()
  }
  private updateOutput(){
    this.selectedTags.emit(
      this.tags.filter((tag)=>{
        return tag.selected
      })
    )
  }
  private loadResults(url?: string) {
    if(url){
      this.http.get(url)
        .map(response => response.json())
        .subscribe((r)=>{
        console.log(r)
        this.tags = this.tags.concat(r.results)
        if(r.next){
          console.log(r.next)
          this.loadResults(r.next)
        }
        else{
          for( let tag of this.tags) {
            tag.style = ["tag", "tag--selected"]
            tag.selected = true;
          }
          this.updateOutput()
        }
        console.log(this.tags)
      })
    }
    else{
      this.http.get("https://m.wickwock.com/api/tags")
        .map(response => response.json())
        .subscribe((r)=>{
        this.tags = this.tags.concat(r.results)
        console.log(r)
        if(r.next){
          console.log(r.next)
          this.loadResults(r.next)
        }
        else{
          for( let tag of this.tags) {
            tag.style = ["tag", "tag--selected"]
            tag.selcted = true;
          }
          this.updateOutput()
        }
      })
    }
  }
  ngOnInit() {
    this.loadResults();
  }

}
