import { Component } from '@angular/core';
import { NavigationService } from '../../../app/services/navigation.service';
@Component({
  selector: 'app-marketing',
  imports: [],
  templateUrl: './marketing.component.html',
  styleUrl: './marketing.component.css'
})
export class MarketingComponent {
  images = ["src/assets/images/aluplast.png"]
  constructor(public navService: NavigationService){}
}
