import { Component } from '@angular/core';
import { CONTACT_INFO } from '../../utils/enums';


@Component({
  selector: 'app-whatsapp',
  template: `
    <div class="fixed bottom-0 left-0 z-[9999] px-10 pb-10">
      <a
        class="bg-[#25d366] rounded-lg p-2 w-14 h-14 flex justify-center items-center relative"
        [href]="whatsappLink"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/images/icons/wpp-icon.png" alt="Whatsapp img" />
      </a>
    </div>
  `,
})
export class WhatsappComponent {
CONTACT_INFO: any = CONTACT_INFO;
private phone: string = '+5493454011406';
private message: string = '¡Hola! Estuve navegando por su página web y me gustaría saber más sobre los servicios de consultoría en sistemas que ofrecen. 😊 ¿Podrían ayudarme? ¡Gracias!';

public whatsappLink: string = this.createWhatsAppLink(this.phone, this.message);

private createWhatsAppLink(phone: string, message: string): string {
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
}
}
