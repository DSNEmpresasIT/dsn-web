import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-swiper-carousel-slide',
  imports: [],
  templateUrl: './swiper-carousel-slide.component.html',
  styleUrl: './swiper-carousel-slide.component.css'
})
export class SwiperCarouselSlideComponent {

  @Input({ required: true }) project: any;

}
