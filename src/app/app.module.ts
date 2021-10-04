import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { SliderComponent } from './components/slider/slider.component';
import { SlideComponent } from './components/slider/components/slide.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, SliderComponent, SlideComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
