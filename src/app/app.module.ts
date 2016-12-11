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
import { ArticleComponent } from './article/article.component';
import { PodcastComponent } from './podcast/podcast.component';
import { VideoComponent } from './video/video.component';

const appRoutes: Routes = [
  { path: 'article/:id', component: ArticleComponent },
  { path: 'podcast/:id', component: PodcastComponent },
  { path: 'video/:id', component: VideoComponent },
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
    ArticleComponent,
    PodcastComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    InfiniteScrollModule,
    AdsenseModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
