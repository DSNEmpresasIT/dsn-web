import { Component } from '@angular/core';
import { CONTACT_INFO } from '../../../utils/enums';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  CONTACT_INFO: any = CONTACT_INFO;
  socialMediaItems:any[] = [
    {
      link:'https://www.linkedin.com/in/dsnempresas/',
      icon:'./images/blanco_lkdn.png',
      name: 'Linkedin',
    },
    {
      link:'https://www.facebook.com/dsnempresas',
      icon:'./images/blanco_fcb.png',
      name: 'Facebook',
    },
    {
      link:`https://api.whatsapp.com/send?phone=${CONTACT_INFO.WHATSAPP}`,
      icon:'./images/blanco_ws.png',
      name: 'Whatsapp',
    },
    {
      link:'https://www.instagram.com/dsnempresas',
      icon:'./images/blanco_ig.png',
      name: 'Instagram',
    },
  ]
}