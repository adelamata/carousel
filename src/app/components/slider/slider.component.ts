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
    this.class = 'transition-effect';
    this.transform = 'translateX(-100%)';
  }

  @HostListener('transitionend') transitioned() {
    this.sortSlides();
  }

  currentSlide = 1;
  slidesTotal = 0;

  ngAfterContentInit() {
    this.slidesTotal = this.slides.length;
    this.slides.forEach((slide, index) => (slide.order = index + 1));
    console.log(this.slidesTotal);
  }

  sortSlides(): void {
    this.currentSlide =
      this.currentSlide === this.slidesTotal ? 1 : this.currentSlide++;

    let order = 0;

    // change order from current position till last
    for (let i = this.currentSlide; i <= this.slidesTotal; i++) {
      this.slides[i].order = order;
      order++;
    }

    // change order from first position till current
    for (let i = 1; i < this.currentSlide; i++) {
      this.slides[i].order = order;
      order++;
    }

    this.class = '';
    this.transform = 'translateX(0)';
  }
}
