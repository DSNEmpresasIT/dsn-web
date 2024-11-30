import { Component } from '@angular/core';
import { CountUpModule } from 'ngx-countup';

@Component({
  selector: 'app-digital-vision',
  imports: [CountUpModule],
  templateUrl: './digital-vision.component.html',
  styleUrl: './digital-vision.component.css'
})
export class DigitalVisionComponent {
  items = [
    { count: 10, label: 'Páginas creadas', xlMarginBottom: '0', width: '216px' },
    { count: 20, label: 'Años de experiencia', xlMarginBottom: '87.65px', width: '241px' },
    { count: 15, label: 'Profesionales a tu disposición', xlMarginBottom: '170.65px', width: '263px' },
    { count: 90, label: 'Clientes satisfechos', xlMarginBottom: '261.35px', width: '288px' },
  ];
}
