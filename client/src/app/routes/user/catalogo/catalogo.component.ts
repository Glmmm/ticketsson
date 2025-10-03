import { Component, inject, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IngressosService } from '../../../services/ingressos.service';
import { IIngressos } from '../../../models/ingressos.model';

@Component({
  selector: 'app-catalogo',
  imports: [DatePipe],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css',
})
export class CatalogoComponent implements OnInit {
  service = inject(IngressosService);
  ingressos?: IIngressos[];

  ngOnInit() {
    this.listarIngressos();
  }

  listarIngressos() {
    this.service.listarIngressos().subscribe((response) => {
      this.ingressos = response;
    });
  }
}
