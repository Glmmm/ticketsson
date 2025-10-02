import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  router = inject(Router);

  autenticado = false;
  admin = false;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    const token = localStorage.getItem('token');
    const validacao = token != null;
    if (validacao) {
      this.autenticado = true;
    }

    return validacao && this.admin
      ? validacao
      : this.redirecionarUsuarioInvalido();
  }

  redirecionarUsuarioInvalido() {
    this.router.navigate(['login']);
    alert('Usuário não autenticado');
    return false;
  }

  trocarTipoUsuario() {
    this.admin = !this.admin;
  }
}
