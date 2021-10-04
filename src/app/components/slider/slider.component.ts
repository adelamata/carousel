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

  @HostListener('click') clicked() {
    console.log ('click');
    this.class = 'transition-effect';
  }

  currentSlide = 1;

  ngAfterContentInit() {
    console.log(this.slides);
    this.slides.forEach((slide, index) => (slide.order = index + 1));
  }
}
