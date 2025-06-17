import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Ingressos } from '../models/mocks/ingressos.mock';
import { IIngressos } from '../models/ingressos.model';

@Injectable({
  providedIn: 'root',
})
export class IngressosService {
  constructor(private http: HttpClient) {}

  listarIngressos() {
    // return this.http.get('');
    return of(Ingressos);
  }

  alterarIngresso(ingresso: IIngressos) {
    return this.http.put('', ingresso);
  }

  cadastrarIngresso(ingresso: IIngressos) {
    return this.http.post('', ingresso);
  }

  excluirIngresso(id: number) {
    return this.http.delete(`${id}`);
  }
}
