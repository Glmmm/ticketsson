import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { LoginGuard } from '../../guard/login.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: false,
})
export class LoginComponent {
  service = inject(LoginService);
  router = inject(Router);
  guard = inject(LoginGuard);
  form = new FormGroup({
    email: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),
  });

  validarLogin() {
    if (this.form.valid) {
      this.service.validarLogin(this.form.value).subscribe((response) => {
        if (response) {
          localStorage.setItem('token', this.form.get('email')?.value!);
          this.guard.autenticado = true;
          this.router.navigate(['/']);
        } else {
          alert('Login inválido');
        }
      });
    } else {
      localStorage.clear();
      alert('Login inválido');
    }
  }
}
