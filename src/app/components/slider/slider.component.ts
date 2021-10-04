import { Component, AfterContentInit } from '@angular/core';
import { SlideComponent } from './components/slide/slide.component';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements AfterContentInit {
  @ContentChildren(SlideComponent) slides: SlideComponent[];

  ngAfterContentInit() {
    console.log(this.slides);
  }
}
