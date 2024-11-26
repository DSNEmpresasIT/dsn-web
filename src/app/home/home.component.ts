import { Component } from '@angular/core';
import { DigitalVisionComponent } from "../../components/home/digital-vision/digital-vision.component";
import { MarketingComponent } from "../../components/home/marketing/marketing.component";

@Component({
  selector: 'app-home',
  imports: [DigitalVisionComponent, MarketingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
