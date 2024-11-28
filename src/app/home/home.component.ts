import { Component } from '@angular/core';
import { DigitalVisionComponent } from '../../components/home/digital-vision/digital-vision.component';
import { MarketingComponent } from '../../components/home/marketing/marketing.component';
import { WeBestOptionComponent } from '../../components/home/we-best-option/we-best-option.component';
import { AboutUSComponent } from "../../components/home/about-us/about-us.component";
import { ContactComponent } from "../../components/home/contact/contact.component";
import { NetworkComponent } from "../../components/home/network/network.component";
import { OurServicesComponent } from "../../components/home/our-services/our-services.component";

@Component({
  selector: 'app-home',
  imports: [DigitalVisionComponent, MarketingComponent, WeBestOptionComponent, AboutUSComponent, ContactComponent, NetworkComponent, OurServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
