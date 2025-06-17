import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Eventos } from '../models/mocks/eventos.mock';
import { IEventos } from '../models/eventos.model';

@Injectable({
  providedIn: 'root',
})
export class EventosService {
  constructor(private http: HttpClient) {}
  api = 'http://localhost:8080/eventos';
  listarEventos(): Observable<IEventos[]> {
    return this.http.get<IEventos[]>(`${this.api}/listar-eventos`);
    // return of(Eventos);
  }

  editarEvento(form: any) {
    return this.http.put(`${this.api}/editar-evento`, form);
  }

  cadastrarEvento(form: any) {
    return this.http.post(`${this.api}/cadastrar-evento`, form);
  }

  deletarEvento(id: number) {
    return this.http.delete(`/deletar-evento/${id}`);
  }
}
