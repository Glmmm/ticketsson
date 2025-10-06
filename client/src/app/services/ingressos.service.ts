import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ingressos } from '../models/mocks/ingressos.mock';
import { IIngressos } from '../models/ingressos.model';

@Injectable({
  providedIn: 'root',
})
export class IngressosService {
  constructor(private http: HttpClient) {}
  private readonly api = 'http://localhost:8080/ingresso';

  listarIngressos(): Observable<IIngressos[]> {
    return this.http.get<IIngressos[]>(`${this.api}/listar-ingressos`);
    // return of(Ingressos);
  }

  editarIngresso(form: any) {
    return this.http.put(`${this.api}/editar-ingresso`, form);
  }

  cadastrarIngresso(form: any) {
    return this.http.post(`${this.api}/cadastrar-ingresso`, form);
  }

  deletarIngresso(id: number) {
    return this.http.delete(`${this.api}/deletar-ingresso/${id}`);
  }
}
