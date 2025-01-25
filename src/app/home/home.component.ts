import { Component } from '@angular/core';
import { DigitalVisionComponent } from '../../components/home/digital-vision/digital-vision.component';
import { MarketingComponent } from '../../components/home/marketing/marketing.component';
import { WeBestOptionComponent } from '../../components/home/we-best-option/we-best-option.component';
import { AboutUSComponent } from "../../components/home/about-us/about-us.component";
import { ContactComponent } from "../../components/home/contact/contact.component";
import { NetworkComponent } from "../../components/home/network/network.component";
import { OurServicesComponent } from "../../components/home/our-services/our-services.component";
import { BrandComponent } from "../../components/home/brand/brand.component";
import { WhatsappComponent } from "../../components/common/whatsappComponent";

@Component({
  selector: 'app-home',
  imports: [DigitalVisionComponent, MarketingComponent, WeBestOptionComponent, AboutUSComponent, ContactComponent, NetworkComponent, OurServicesComponent, BrandComponent, WhatsappComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
