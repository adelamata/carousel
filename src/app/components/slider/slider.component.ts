import {
  Component,
  AfterContentInit,
  ContentChildren,
  HostListener,
  HostBinding,
} from '@angular/core';
import { SlideComponent } from './components/slide/slide.component';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements AfterContentInit {
  @ContentChildren(SlideComponent) slides: SlideComponent[];

  @HostBinding('class') class;
  @HostBinding('style.transform') transform;

  @HostListener('click') clicked() {
    console.log('click');
    this.class = 'transition-effect';
    this.transform = 'translateX(-100%)';
  }

  currentSlide = 1;

  ngAfterContentInit() {
    console.log(this.slides);
    this.slides.forEach((slide, index) => (slide.order = index + 1));
  }
}
