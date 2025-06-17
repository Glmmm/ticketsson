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
    new header('Ações', 'acoes', 'cog'),
  ];
  lista = [] as IEventos[];
  exibirFormulario: boolean = false;
  habilitarEdicao: boolean = false;
  constructor(private service: EventosService) {}

  form = new FormGroup({
    id: new FormControl(),
    nome: new FormControl('', Validators.required),
    descricao: new FormControl('', Validators.required),
    dataInicio: new FormControl('', Validators.required),
    dataFim: new FormControl('', Validators.required),
    cep: new FormControl('', Validators.required),
    endereco: new FormControl('', Validators.required),
    organizador: new FormControl(0, Validators.required),
  });

  ngOnInit() {
    this.listarEventos();
  }

  listarEventos() {
    this.service.listarEventos().subscribe((response) => {
      this.lista = response;
    });
  }

  cadastrarEvento() {
    console.log('Cadastrar Evento:', this.form.value);
  }

  alterarEvento() {
    console.log('Alterar Evento: ', this.form.value);
  }

  excluirEvento(item: IEventos) {
    if (confirm(`Deseja Excluir "${item.descricao}"?`)) {
      console.log('Excluir evento', item.id);
    }
  }

  habilitarEdicaoHandler(item: IEventos) {
    this.habilitarEdicao = !this.habilitarEdicao;
    if (this.habilitarEdicao) {
      this.form.get('id')?.setValue(item.id);
      this.form.get('nome')?.setValue(item.nome);
      this.form.get('descricao')?.setValue(item.descricao);
      this.form.get('dataInicio')?.setValue(item.dataInicio);
      this.form.get('dataFim')?.setValue(item.dataFim);
      this.form.get('cep')?.setValue(item.cep);
      this.form.get('endereco')?.setValue(item.endereco);
      this.form.get('organizador')?.setValue(item.organizador.id);
    } else {
      this.form.reset();
    }
  }
}
