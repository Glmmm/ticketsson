import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Organizadores } from '../mocks/organizadores.mock';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrganizadorService {
  constructor(private http: HttpClient) {}

  listarOrganizadores() {
    return of(Organizadores);
  }

  cadastrarOrganizador() {
    return this.http.put('', null);
  }
}
