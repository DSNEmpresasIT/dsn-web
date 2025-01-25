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
      title: "Marketing Estratégico",
      description: "Potenciamos tu marca con marketing y branding de excelencia",
      image: "./svgs/brand.svg",
      alt: "brand",
    },
    {
      title: "Desarrollo Digital",
      description: "Soluciones únicas para hacer realidad tus ideas tecnológicas.",
      image: "./svgs/code.svg",
      alt: "code",
    },
    {
      title: "Redes y conectividad",
      description: "Estrategias eficaces para agilizar los procesos y mejorar tu rendimiento.",
      image: "./svgs/branch.svg",
      alt: "branch",
    },
  ];
}
