import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Organizadores } from '../models/mocks/organizadores.mock';
import { IOrganizador } from '../models/organizador.model';

@Injectable({
  providedIn: 'root',
})
export class OrganizadorService {
  constructor(private http: HttpClient) {}

  listarOrganizadores() {
    return of(Organizadores);
  }

  alterarOrganizador(Organizador: IOrganizador) {
    return this.http.put('', Organizador);
  }

  cadastrarOrganizador(Organizador: IOrganizador) {
    return this.http.post('', Organizador);
  }

  excluirOrganizador(id: number) {
    return this.http.delete(`${id}`);
  }
}
