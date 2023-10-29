import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  avaliacaoForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.avaliacaoForm = this.fb.group({
      nome: ['', [Validators.required, Validators.min(3)]],
      email: ['', [Validators.required, Validators.email]],
      dtNascimento: ['', Validators.required],
      feedback: ['', Validators.required],
      nota: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
    });
  }

  enviarAvaliacao() {
    console.log(this.avaliacaoForm.value);
  }
}
