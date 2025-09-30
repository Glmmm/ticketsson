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
    email: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),
  });
  cadastrar = false;

  validarLogin() {
    if (this.form.valid) {
      this.service.validarLogin(this.form.value).subscribe((response) => {
        if (response) {
          localStorage.setItem('token', this.form.get('email')?.value!);
          this.router.navigate(['eventos']);
        } else {
          alert('Usuário não encontrado');
        }
      });
    } else {
      localStorage.clear();
      alert('Login inválido');
    }
  }

  cadastrarUsuario() {
    if (this.form.valid) {
      this.service.cadastraUsuario(this.form.value).subscribe(
        (response) => {
          localStorage.setItem('token', this.form.get('email')?.value!);
        },
        (error) => {}
      );
    } else {
      localStorage.clear();
      alert('Formulário inválido');
    }
  }

  handleTypeLogin() {
    this.cadastrar = !this.cadastrar;
  }
}
