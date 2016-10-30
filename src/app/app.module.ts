import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { AppComponent} from './app.component';
import { SliderComponent } from './slider/slider.component';
import { ArticlesComponent } from './articles/articles.component';
import { VideosComponent } from './videos/videos.component';
import { SafePipe } from './safe.pipe';
import { MenuComponent } from './menu/menu.component';
import { PodcastsComponent } from './podcasts/podcasts.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    ArticlesComponent,
    VideosComponent,
    SafePipe,
    MenuComponent,
    PodcastsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
