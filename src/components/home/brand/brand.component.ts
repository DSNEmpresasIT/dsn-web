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
      url: 'https://felixmenendez.com.ar'
    },
    {
      image: "./images/aluplast_150x150.png",
      alt: "aluplast",
      url: 'https://aluplast.com.ar'
    },
    {
      image: "./images/grupoimagenes_150x150.png",
      alt: "grupo imágenes médicas",
      url: 'https://www.grupoimagenesmedicas.com.ar'
    },
    {
      image: "./images/panorama_150x150.png",
      alt: "panorama",
      url: 'https://panorama21.com.ar'
    },
  ];
}
