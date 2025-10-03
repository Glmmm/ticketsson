import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IReservas } from '../models/reservas.model';

@Injectable({
  providedIn: 'root',
})
export class ReservasService {
  http = inject(HttpClient);
  private readonly api = 'http://localhost:8080/reservas';

  cadastrarReserva(form: any) {
    return this.http.post(`${this.api}`, form);
  }

  buscarReserva(id: number) {
    return this.http.get(`${this.api}/${id}`);
  }

  buscarReservas() {
    return this.http.get(`${this.api}`);
  }

  buscarReservasUsuario(idUsuario: number): Observable<IReservas[]> {
    return this.http.get<IReservas[]>(`${this.api}/${idUsuario}`);
  }

  excluirReserva(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
}
