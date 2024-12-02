import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../../../app/services/navigation.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isOpen = false;
  isDeptOpen = false;
  basePath: string = '';
  constructor(public navService: NavigationService) {}
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  toggleDeptMenu() {
    this.isDeptOpen = !this.isDeptOpen;
  }
}
