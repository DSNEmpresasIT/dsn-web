import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  motives: string[] = ['Marketing', 'Software', 'Redes', 'Otros'];
  selectedMotive: string | null = null;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      motive: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  selectMotive(motive: string): void {
    this.selectedMotive = motive;
    this.contactForm.get('motive')?.setValue(motive);
  }

  submitForm(): void {
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);
      alert('¡Formulario enviado con éxito!');
      this.contactForm.reset();
      this.selectedMotive = null;
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }
}
