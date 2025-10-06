import { Component, inject, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IngressosService } from '../../../services/ingressos.service';
import { IIngressos } from '../../../models/ingressos.model';
import { ReservasService } from '../../../services/reservas.service';

@Component({
  selector: 'app-catalogo',
  imports: [DatePipe],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css',
})
export class CatalogoComponent implements OnInit {
  service = inject(IngressosService);
  serviceReserva = inject(ReservasService);
  ingressos?: IIngressos[];

  ngOnInit() {
    this.listarIngressos();
  }

  /**
   * 
   * @description Função para reservar ingresso
   * @param item - Ingresso selecionado
   */
  public reservarIngresso(item: IIngressos): void {
    if (!item || !item.id) {
      return;
    }
    const form = {
      email: localStorage.getItem('token') || '',
      idIngresso: item.id,
    }
    this.serviceReserva.cadastrarReserva(form).subscribe(() => {
      this.listarIngressos();
    });
  }

  listarIngressos() {
    this.service.listarIngressos().subscribe((response) => {
      this.ingressos = response;
    });
  }
}
