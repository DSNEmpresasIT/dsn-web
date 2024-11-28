import { Component } from '@angular/core';

@Component({
  selector: 'app-brand',
  imports: [],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent {
  brands = [
    {
      image: "./images/felix_150x150.png",
      alt: "felix",
    },
    {
      image: "./images/aluplast_150x150.png",
      alt: "aluplast",
    },
    {
      image: "./images/grupoimagenes_150x150.png",
      alt: "grupo imágenes médicas",
    },
    {
      image: "./images/panorama_150x150.png",
      alt: "panorama",
    },
  ];
}
