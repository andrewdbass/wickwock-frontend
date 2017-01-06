import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
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
import { HomeComponent } from './home/home.component';
import {MdGridListModule} from '@angular2-material/grid-list/grid-list.js';
import { VideoComponent } from './video/video.component';
import { PodcastComponent } from './podcast/podcast.component';

import { MetaModule, MetaConfig, MetaService } from 'ng2-meta';

const metaConfig: MetaConfig = {


  defaults: {
    title: 'Wick Wock',
    'og:image': 'www.wickwock.com/assets/images/header_logo.png',
  }
};


const appRoutes: Routes = [
  { path: 'video/:id', component: VideoComponent },
  { path: 'podcast/:id', component: PodcastComponent },
  { path: '', component: HomeComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    ArticlesComponent,
    VideosComponent,
    SafePipe,
    MenuComponent,
    PodcastsComponent,
    TagsComponent,
    HomeComponent,
    VideoComponent,
    PodcastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    InfiniteScrollModule,
    AdsenseModule,
    RouterModule.forRoot(appRoutes),
    MetaModule.forRoot(metaConfig),
    MdGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
