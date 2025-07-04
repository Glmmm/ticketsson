import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    const token = localStorage.getItem('token');
    const validacao = token != null;

    return validacao ? validacao : this.naoPodeAcessar();
  }

  naoPodeAcessar() {
    alert('Usuário não autenticado');
    this.router.navigate(['login']);
    return false;
  }
}
