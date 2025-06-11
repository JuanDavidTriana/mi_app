import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-example-form',
  standalone: false,
  templateUrl: './example-form.component.html',
  styleUrl: './example-form.component.css'
})
export class ExampleFormComponent {
  // Definimos el formulario reactivo
  form: FormGroup;
  // Variable para mostrar los datos enviados
  submitted = false;

  constructor(private fb: FormBuilder) {
    // Inicializamos el formulario con validaciones
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // Método que se ejecuta al enviar el formulario
  onSubmit() {
    if (this.form.valid) {
      this.submitted = true;
    }
  }
}
