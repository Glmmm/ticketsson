import { Component, inject, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { LoginGuard } from '../../guard/login.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: false,
})
export class HeaderComponent {
  router = inject(Router);
  guard = inject(LoginGuard);

  sair() {
    localStorage.clear();
    this.guard.autenticado = false;
    this.router.navigate(['login']);
  }

  trocarCargo() {
    this.guard.admin
      ? this.router.navigate(['/admin'])
      : this.router.navigate(['/user']);
    this.guard.trocarTipoUsuario();
  }
}
