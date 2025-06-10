import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLaptopCode, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { ContactComponent } from "../../../components/home/contact/contact.component";

@Component({
  selector: 'app-about',
  imports: [
    FontAwesomeModule,
    ContactComponent
],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  faLaptopCode = faLaptopCode;
  faChevronDown = faChevronDown;

}
