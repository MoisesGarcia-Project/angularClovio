// my-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {}

  // Método para obtener el control del formulario
  get f() {
    return this.myForm.controls;
  }

  // Método para manejar la presentación del formulario
  onSubmit() {
    if (this.myForm.valid) {
      // Realizar acciones con los datos del formulario
      console.log(this.myForm.value);
    } else {
      // Marcar campos como tocados para mostrar mensajes de validación
      this.myForm.markAllAsTouched();
    }
  }
}
