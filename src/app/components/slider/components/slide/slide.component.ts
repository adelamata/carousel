import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent {
  @HostBinding('style.order') order;
}
