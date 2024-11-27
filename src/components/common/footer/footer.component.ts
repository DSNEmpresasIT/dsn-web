import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  socialMediaItems:any[] = [
    {
      link:'',
      icon:'./images/blanco_lkdn.png',
      name: 'Linkedin',
    },
    {
      link:'',
      icon:'./images/blanco_fcb.png',
      name: 'Facebook',
    },
    {
      link:'',
      icon:'./images/blanco_ws.png',
      name: 'Whatsapp',
    },
    {
      link:'',
      icon:'./images/blanco_ig.png',
      name: 'Instagram',
    },
  ]
}
