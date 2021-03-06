import {
  Component,
  AfterContentInit,
  ContentChildren,
  HostListener,
  HostBinding,
  ViewChild,
  ElementRef,
  Renderer2,
  QueryList,
} from '@angular/core';
import { SlideComponent } from './components/slide/slide.component';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements AfterContentInit {
  @ContentChildren(SlideComponent) rawSlides: QueryList<SlideComponent>;
  @ViewChild('sliderContent') sliderContent: ElementRef;

  constructor(private readonly renderer: Renderer2) {}

  @HostListener('click') clicked() {
    this.startEffect();
  }

  @HostListener('transitionend') transitioned() {
    this.sortSlides();
  }

  slides: SlideComponent[];
  currentSlide = 0;
  slidesTotal = 0;

  ngAfterContentInit() {
    this.slides = this.rawSlides.toArray();

    this.slidesTotal = this.slides.length -1;
    this.slides.forEach((slide, index) => (slide.order = index + 1));
  }

  sortSlides(): void {
    this.currentSlide =
      this.currentSlide === this.slidesTotal ? 0 : ++this.currentSlide;

    let order = 1;

    for (let i = this.currentSlide; i <= this.slidesTotal; i++) {
      this.slides[i].order = order;
      order++;
    }

    for (let i = 0; i < this.currentSlide; i++) {
      this.slides[i].order = order;
      order++;
    }

    this.endEffect();
  }

  private startEffect(): void {
    this.renderer.setStyle(
      this.sliderContent.nativeElement,
      'transform',
      'translateX(-100%)'
    );
    this.renderer.addClass(
      this.sliderContent.nativeElement,
      'transition-effect'
    );
  }

  private endEffect(): void {
    this.renderer.setStyle(
      this.sliderContent.nativeElement,
      'transform',
      'translateX(0)'
    );
    this.renderer.removeClass(
      this.sliderContent.nativeElement,
      'transition-effect'
    );
  }
}
