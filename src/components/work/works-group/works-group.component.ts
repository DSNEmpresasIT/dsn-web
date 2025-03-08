import { Component, Input } from '@angular/core';
import { SwiperCarouselComponent } from "../swiper-carousel/swiper-carousel.component";

@Component({
  selector: 'app-works-group',
  imports: [SwiperCarouselComponent],
  templateUrl: './works-group.component.html',
  styleUrl: './works-group.component.css'
})
export class WorksGroupComponent {

  @Input({ required: true }) worksGroup: any;

}
