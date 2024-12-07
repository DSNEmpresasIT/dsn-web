import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Email } from '../interfaces/Email';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailerService {
  private httpClient = inject(HttpClient)
  async sendEmail(payload: Email) {
    return firstValueFrom(this.httpClient.post(`${environment.GLOBALAPIURL}mailer/email/${environment.EMAILID}/send-email`, payload))
  }
}
