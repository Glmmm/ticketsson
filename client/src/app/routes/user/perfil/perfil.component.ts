import { Component, inject, OnInit } from '@angular/core';
import { ReservasService } from '../../../services/reservas.service';
import { IReservas } from '../../../models/reservas.model';
import { IUsuario } from '../../../models/usuario.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',
  imports: [],
})
export class PerfilComponent implements OnInit {
  private service = inject(ReservasService);
  reservas?: IReservas[];
  usuario?: IUsuario;
  ngOnInit() {
    this.listarReservas();
  }

  listarReservas() {
    this.service.buscarReservasUsuario(1).subscribe((response) => {
      this.reservas = response;
    });
  }
}
