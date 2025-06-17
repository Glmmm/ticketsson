import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Eventos } from '../models/mocks/eventos.mock';
import { IEventos } from '../models/eventos.model';

@Injectable({
  providedIn: 'root',
})
export class EventosService {
  constructor(private http: HttpClient) {}

  listarEventos() {
    return of(Eventos);
  }

  alterarEvento(evento: IEventos) {
    return this.http.put('', evento);
  }

  cadastrarEvento(evento: IEventos) {
    return this.http.post('', evento);
  }

  excluirEvento(id: number) {
    return this.http.delete(`${id}`);
  }
}
