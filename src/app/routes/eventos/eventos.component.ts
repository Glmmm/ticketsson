import { Component } from '@angular/core';
import { header } from '../../utils/table.util';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventosService } from '../../services/eventos.service';
import { IEventos } from '../../models/eventos.model';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css',
  standalone: false,
})
export class EventosComponent {
  tableHeader = [
    new header('Id', 'id', 'arrow-down-1-9'),
    new header('Nome', 'nome', 'user'),
    new header('Descrição', 'descricao', 'pen'),
    new header('Organizador', 'organizador', 'user-tie'),
    new header('Data Inicio', 'dataInicio', 'calendar'),
    new header('Data Fim', 'dataFim', 'calendar'),
    new header('CEP', 'cep', 'map-pin'),
    new header('Endereço', 'endereco', 'map-pin'),
    new header('Ações', 'acoes', 'edit'),
  ];
  lista = [] as IEventos[];
  exibirFormulario: boolean = false;
  constructor(private service: EventosService) {}

  form = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(),
    descricao: new FormControl(),
    dataInicio: new FormControl(),
    dataFim: new FormControl(),
    cep: new FormControl(),
    endereco: new FormControl(),
    organizador: new FormControl(),
  });

  ngOnInit() {
    this.listarOrganizadores();
  }

  listarOrganizadores() {
    this.service.listarEventos().subscribe((response) => {
      this.lista = response;
    });
  }

  cadastrarOrganizador() {}

  changeExibirFormulario() {
    this.exibirFormulario = !this.exibirFormulario;
  }
}
