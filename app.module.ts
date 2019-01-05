import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { VideoComponent } from './video/video.component';
import { Routes } from '@angular/router';
import { VholderComponent } from './vholder/vholder.component';
import { Video1Component } from './video1/video1.component';
import { Video2Component } from './video2/video2.component';
import { Video0Component } from './video0/video0.component';
import { Video3Component } from './video3/video3.component';
import { Video4Component } from './video4/video4.component';
import { Video5Component } from './video5/video5.component';
import { Video6Component } from './video6/video6.component';
import { Video7Component } from './video7/video7.component';
import { Video8Component } from './video8/video8.component';
import { Video9Component } from './video9/video9.component';
import { Video10Component } from './video10/video10.component';

const routes: Routes = [
  { path: '', component: VideoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    VideoComponent,
    VholderComponent,
    Video1Component,
    Video2Component,
    Video0Component,
    Video3Component,
    Video4Component,
    Video5Component,
    Video6Component,
    Video7Component,
    Video8Component,
    Video9Component,
    Video10Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
