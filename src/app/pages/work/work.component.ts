import { Component, OnInit } from '@angular/core';
import { ContactComponent } from "../../../components/home/contact/contact.component";
import { BrandComponent } from '../../../components/home/brand/brand.component';
import { WorksGroupComponent } from "../../../components/work/works-group/works-group.component";

@Component({
  selector: 'app-work',
  imports: [
    ContactComponent,
    BrandComponent,
    WorksGroupComponent
  ],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent implements OnInit {

  worksGroups = [
    {
      title: 'REDES Y CONECTIVIDAD',
      description: 'Explorá cómo hemos desarrollado soluciones en redes y conectividad, asegurando que cada proyecto cuente con la infraestructura digital ideal para un rendimiento óptimo.',
      projects: [
        {
          title: 'AEROPUERTO',
          location: 'CONCORDIA',
          imgUrl: 'https://cdn.mos.cms.futurecdn.net/7W2n5T4Wki9YVHUnprVUaM.jpg',
          url: ''
        },
        {
          title: 'EJEMPLO',
          location: 'PROYECTO',
          imgUrl: 'https://cdn.mos.cms.futurecdn.net/7W2n5T4Wki9YVHUnprVUaM.jpg',
          url: ''
        },
        {
          title: 'EJEMPLO',
          location: 'PROYECTO',
          imgUrl: 'https://cdn.mos.cms.futurecdn.net/7W2n5T4Wki9YVHUnprVUaM.jpg',
          url: ''
        },
        {
          title: 'EJEMPLO',
          location: 'PROYECTO',
          imgUrl: 'https://cdn.mos.cms.futurecdn.net/7W2n5T4Wki9YVHUnprVUaM.jpg',
          url: ''
        },
        {
          title: 'EJEMPLO',
          location: 'PROYECTO',
          imgUrl: 'https://cdn.mos.cms.futurecdn.net/7W2n5T4Wki9YVHUnprVUaM.jpg',
          url: ''
        },
        {
          title: 'EJEMPLO',
          location: 'PROYECTO',
          imgUrl: 'https://cdn.mos.cms.futurecdn.net/7W2n5T4Wki9YVHUnprVUaM.jpg',
          url: ''
        }
      ]
    },
    {
      title: 'SOFTWARE Y PÁGINAS',
      description: 'Descubrí cómo transformamos ideas en realidad, desarrollando páginas y softwares que impulsan la presencia y el crecimiento de nuestros clientes.',
      projects: [
        {
          title: 'ALUPLAST',
          location: 'CONCORDIA',
          imgUrl: 'https://cdn.mos.cms.futurecdn.net/7W2n5T4Wki9YVHUnprVUaM.jpg',
          url: ''
        },
        {
          title: 'FÉLIX MENÉNDEZ',
          location: 'CONCORDIA',
          imgUrl: 'https://cdn.mos.cms.futurecdn.net/7W2n5T4Wki9YVHUnprVUaM.jpg',
          url: ''
        },
        {
          title: 'IMÁGENES MÉDICAS',
          location: 'PROYECTO',
          imgUrl: 'https://cdn.mos.cms.futurecdn.net/7W2n5T4Wki9YVHUnprVUaM.jpg',
          url: ''
        },
        {
          title: 'EJEMPLO',
          location: 'PROYECTO',
          imgUrl: 'https://cdn.mos.cms.futurecdn.net/7W2n5T4Wki9YVHUnprVUaM.jpg',
          url: ''
        },
        {
          title: 'EJEMPLO',
          location: 'PROYECTO',
          imgUrl: 'https://cdn.mos.cms.futurecdn.net/7W2n5T4Wki9YVHUnprVUaM.jpg',
          url: ''
        },
        {
          title: 'EJEMPLO',
          location: 'PROYECTO',
          imgUrl: 'https://cdn.mos.cms.futurecdn.net/7W2n5T4Wki9YVHUnprVUaM.jpg',
          url: ''
        }
      ]
    },
    {
      title: 'MERKETING Y BRANDING',
      description: 'Conocé cómo ayudamos a marcas a destacar, creando estrategias de marketing y branding que conectan, inspiran y generan impacto.',
      projects: [
        {
          title: 'EJEMPLO',
          location: 'PROYECTO',
          imgUrl: 'https://cdn.mos.cms.futurecdn.net/7W2n5T4Wki9YVHUnprVUaM.jpg',
          url: ''
        },
        {
          title: 'EJEMPLO',
          location: 'PROYECTO',
          imgUrl: 'https://cdn.mos.cms.futurecdn.net/7W2n5T4Wki9YVHUnprVUaM.jpg',
          url: ''
        },
        {
          title: 'EJEMPLO',
          location: 'PROYECTO',
          imgUrl: 'https://cdn.mos.cms.futurecdn.net/7W2n5T4Wki9YVHUnprVUaM.jpg',
          url: ''
        },
        {
          title: 'EJEMPLO',
          location: 'PROYECTO',
          imgUrl: 'https://cdn.mos.cms.futurecdn.net/7W2n5T4Wki9YVHUnprVUaM.jpg',
          url: ''
        },
        {
          title: 'EJEMPLO',
          location: 'PROYECTO',
          imgUrl: 'https://cdn.mos.cms.futurecdn.net/7W2n5T4Wki9YVHUnprVUaM.jpg',
          url: ''
        }
      ]
    }
  ];

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

}
