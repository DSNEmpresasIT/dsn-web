import { Component } from '@angular/core';
import { DigitalVisionComponent } from "../../components/home/digital-vision/digital-vision.component";
import { MarketingComponent } from "../../components/home/marketing/marketing.component";
import { NetworkComponent } from "../../components/home/network/network.component";

@Component({
  selector: 'app-home',
  imports: [DigitalVisionComponent, MarketingComponent, NetworkComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
