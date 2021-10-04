import { Component, HostBinding, OnChanges } from '@angular/core';

@Component({
  selector: 'slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnChanges {
  @HostBinding('style.order') order;

  ngOnChanges() {
    console.log(this.order);
  }
}
