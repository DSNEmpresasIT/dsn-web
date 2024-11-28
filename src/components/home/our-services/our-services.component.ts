import { Component } from '@angular/core';
@Component({
  selector: 'app-our-services',
  imports: [],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css'
})
export class OurServicesComponent {
  cards = [
    {
      title: "Potenciar tu marca",
      description: "con marketing y branding de excelencia",
      image: "./svgs/brand.svg",
      alt: "brand",
    },
    {
      title: "Códigos de primera calidad ",
      description: "para hacer realidad tus ideas digitales",
      image: "./svgs/code.svg",
      alt: "code",
    },
    {
      title: "Redes y conectividad",
      description: "para agilizar el movimiento de tu empresa",
      image: "./svgs/branch.svg",
      alt: "branch",
    },
  ];
}
