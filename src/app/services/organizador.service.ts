import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Organizadores } from '../models/mocks/organizadores.mock';

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
