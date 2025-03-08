import { Component, ElementRef, ViewChild, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { SwiperCarouselSlideComponent } from '../swiper-carousel-slide/swiper-carousel-slide.component';

@Component({
  selector: 'app-swiper-carousel',
  imports: [
    SwiperCarouselSlideComponent
  ],
  templateUrl: './swiper-carousel.component.html',
  styleUrl: './swiper-carousel.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SwiperCarouselComponent {

  @ViewChild('swiperEl', { static: false }) swiperEl?: ElementRef;
  @Input({ required: true }) projects: any;
  
  ngAfterViewInit() {
    if (this.swiperEl) {
      (this.swiperEl.nativeElement as any).initialize();
    }
  }

  prevSlide() {
    (this.swiperEl?.nativeElement as any).swiper.slidePrev();
  }

  nextSlide() {
    (this.swiperEl?.nativeElement as any).swiper.slideNext();
  }

  breakpointsConfig = {
    0: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20
    },
  }

}
