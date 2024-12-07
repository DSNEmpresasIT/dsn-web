import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MailerService } from '../../../app/services/mailer.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  isLoading = false
  contactForm: FormGroup;
  motives: string[] = ['Marketing', 'Software', 'Redes', 'Otros'];
  selectedMotive: string | null = null;
  mailerService = inject(MailerService)
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['Desde DSN WEB'],
      from: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  selectMotive(motive: string): void {
    this.selectedMotive = motive;
    this.contactForm.get('subject')?.setValue(motive);
  }

  async submitForm(): Promise<void> {
    try {
      this.isLoading = true
      if (this.contactForm.valid) {
        console.log('Form Submitted', this.contactForm.value);
        await this.mailerService.sendEmail(this.contactForm.value)
        alert('¡Formulario enviado con éxito!');
        this.contactForm.reset();
        this.selectedMotive = null;
      }
      else {
        alert('Por favor, complete todos los campos correctamente.');
      }
    }
    catch {
      alert('Hubo un error al enviar email, espere unos minutos y vuelva a intentar');
    } finally {
      this.isLoading = false
    }
  }
}
