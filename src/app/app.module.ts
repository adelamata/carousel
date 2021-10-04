import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { CarouselComponent } from './components/carousel/carousel.component';
import { SlideComponent } from './components/carousel/slider/slide.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, CarouselComponent, SlideComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
