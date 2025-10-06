import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivateChild {
  router = inject(Router);

  autenticado = true;
  admin = false;

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    const token = localStorage.getItem('token');
    const valido = token != null;
    if (!valido) {
      this.autenticado = false;
    }

    return valido || this.admin ? valido : this.redirecionarUsuarioInvalido();
  }

  redirecionarUsuarioInvalido() {
    this.router.navigate(['']);
    alert('Ação não permitida');
    return false;
  }

  trocarTipoUsuario() {
    this.admin = !this.admin;
  }
}
