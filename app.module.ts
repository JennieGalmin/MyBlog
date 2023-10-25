import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

import { PostsComponent } from './posts/posts.component';
import { OwnersviewComponent } from './ownersview/ownersview.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { LikeComponent } from './likes/like.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    PostsComponent,
    OwnersviewComponent,
    AboutMeComponent,
    LikeComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule, 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
