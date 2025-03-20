import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-swiper-carousel-slide',
  imports: [
    RouterLink
  ],
  templateUrl: './swiper-carousel-slide.component.html',
  styleUrl: './swiper-carousel-slide.component.css'
})
export class SwiperCarouselSlideComponent {

  @Input({ required: true }) project: any;

}
