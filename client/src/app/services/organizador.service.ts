import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Organizadores } from '../models/mocks/organizadores.mock';
import { IOrganizador } from '../models/organizador.model';

@Injectable({
  providedIn: 'root',
})
export class OrganizadorService {
  constructor(private http: HttpClient) {}
  api = 'http://localhost:8080/organizador';

  listarOrganizadores(): Observable<IOrganizador[]> {
    return this.http.get<IOrganizador[]>(`${this.api}/listar-organizadores`);
  }

  editarOrganizador(form: any) {
    return this.http.put(`${this.api}/editar-organizador`, form);
  }

  cadastrarOrganizador(form: any) {
    return this.http.post(`${this.api}/cadastrar-organizador`, form);
  }

  deletarOrganizador(id: number) {
    return this.http.delete(`${this.api}/deletar-organizador/${id}`);
  }
}
