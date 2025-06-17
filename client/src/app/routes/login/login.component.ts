import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: false,
})
export class LoginComponent {
  constructor(private service: LoginService, private router: Router) {}
  form = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  validarLogin() {
    if (this.form.valid) {
      localStorage.setItem('token', this.form.get('user')?.value!);
      this.router.navigate(['eventos']);
    } else {
      localStorage.clear();
      alert('Formulário inválido');
    }
  }
}
