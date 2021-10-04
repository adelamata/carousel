import { Component, AfterContentInit, ContentChildren } from '@angular/core';
import { SlideComponent } from './components/slide/slide.component';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements AfterContentInit {
  @ContentChildren(SlideComponent) slides: SlideComponent[];

  currentSlide = 1;

  ngAfterContentInit() {
    console.log(this.slides);
    this.slides.forEach(
      (slide, index) => slide.order = index + 1
    );
  }
}
