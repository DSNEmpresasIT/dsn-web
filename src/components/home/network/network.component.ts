import { Component } from '@angular/core';
import { NavigationService } from '../../../app/services/navigation.service';

@Component({
  selector: 'app-network',
  imports: [],
  templateUrl: './network.component.html',
  styleUrl: './network.component.css'
})
export class NetworkComponent {
  constructor(public navService: NavigationService) {}

}
