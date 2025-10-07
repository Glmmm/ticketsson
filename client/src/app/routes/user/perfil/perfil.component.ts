import { Component, inject, OnInit } from '@angular/core';
import { ReservasService } from '../../../services/reservas.service';
import { IReservas } from '../../../models/reservas.model';
import { IUsuario } from '../../../models/usuario.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',
  imports: [DatePipe],
})
export class PerfilComponent implements OnInit {
  private service = inject(ReservasService);
  reservas?: IReservas[];
  usuario?: IUsuario;
  ngOnInit() {
    this.listarReservas();
  }

  listarReservas() {
    const email = localStorage.getItem('token') || '';
    if (!email) return;
    this.service.buscarReservasUsuario(email).subscribe((response) => {
      this.reservas = response;
    });
  }

  cancelarReserva(reserva: IReservas) {
    if (confirm(`Deseja cancelar a reserva "${reserva.ingresso.descricao}"`)) {
      this.service.excluirReserva(reserva.id).subscribe(
        (response) => {
          this.listarReservas();
        },
        (error) => {
          alert(error.error.message);
        }
      );
    }
  }
}
