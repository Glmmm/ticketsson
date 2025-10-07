import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { IIngressos } from '../../../models/ingressos.model';
import { ReservasService } from '../../../services/reservas.service';
import { EventosService } from '../../../services/eventos.service';
import { IEventosComIngressos } from '../../../models/eventos-com-ingressos.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-catalogo',
  imports: [DatePipe, FormsModule, CommonModule],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css',
})
export class CatalogoComponent implements OnInit {
  service = inject(EventosService);
  serviceReserva = inject(ReservasService);
  eventosComIngressos?: IEventosComIngressos[];
  ingresso?: IIngressos;
  ingressoSelecionado?: IIngressos;

  ngOnInit() {
    this.listarEventosComIngressos();
  }

  public reservarIngresso(item: IIngressos): void {
    if (!item || !item.id) {
      return;
    }
    const form = {
      email: localStorage.getItem('token') || '',
      idIngresso: item.id,
    };
    this.serviceReserva.cadastrarReserva(form).subscribe(
      () => {
        this.ingresso = undefined;
        this.ingressoSelecionado = undefined;
        this.listarEventosComIngressos();
        alert('Ingresso reservado com sucesso');
      },
      (error) => {
        alert(error.error.message);
        this.ingresso = undefined;
        this.ingressoSelecionado = undefined;
      }
    );
  }

  listarEventosComIngressos() {
    this.service.listarEventosComIngressos().subscribe((response) => {
      this.eventosComIngressos = response;
    });
  }

  selecionarIngresso(value: IIngressos) {
    this.ingressoSelecionado = value;
  }
}
