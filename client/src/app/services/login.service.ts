import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  private readonly api = 'http://localhost:8080/usuario';

  validarLogin(form: any) {
    return this.http.post(`${this.api}/logar`, form);
  }
}
