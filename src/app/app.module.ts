import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { AdsenseModule } from 'ng2-adsense';

import { AppComponent} from './app.component';
import { SliderComponent } from './slider/slider.component';
import { ArticlesComponent } from './articles/articles.component';
import { VideosComponent } from './videos/videos.component';
import { SafePipe } from './safe.pipe';
import { MenuComponent } from './menu/menu.component';
import { PodcastsComponent } from './podcasts/podcasts.component';
import { TagsComponent } from './tags/tags.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    ArticlesComponent,
    VideosComponent,
    SafePipe,
    MenuComponent,
    PodcastsComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    InfiniteScrollModule,
    AdsenseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
