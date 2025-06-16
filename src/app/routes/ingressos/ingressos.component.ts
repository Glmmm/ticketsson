import { Component } from '@angular/core';
import { header } from '../../utils/table.util';
import { FormControl, FormGroup } from '@angular/forms';
import { IIngressos } from '../../models/ingressos.model';
import { IngressosService } from '../../services/ingressos.service';

@Component({
  selector: 'app-ingressos',
  templateUrl: './ingressos.component.html',
  styleUrl: './ingressos.component.css',
  standalone: false,
})
export class IngressosComponent {
  tableHeader = [
    new header('Id', 'id', 'arrow-down-1-9'),
    new header('Descrição', 'descricao', 'pen'),
    new header('Evento', 'evento', 'user'),
    new header('Organizador', 'organizador', 'user-tie'),
    new header('Quantidade', 'qtd', 'ticket'),
    new header('Ações', 'acoes', 'edit'),
  ];
  exibirFormulario: boolean = false;
  habilitarEdicao: boolean = false;
  lista = [] as IIngressos[];
  ingressoSelecionado = {} as IIngressos;
  constructor(private service: IngressosService) {}

  form = new FormGroup({
    id: new FormControl(),
    descricao: new FormControl(),
    evento: new FormControl(),
    organizador: new FormControl(),
    qtd: new FormControl(),
  });

  ngOnInit() {
    this.listarOrganizadores();
  }

  listarOrganizadores() {
    this.service.listarIngressos().subscribe((response) => {
      this.lista = response;
    });
  }

  cadastarIngresso() {
    console.log('Cadastar Ingresso: ', this.form.value);
  }
  excluirIngresso(id: number) {
    console.log('Excluir Ingresso: ', id);
  }

  alterarIngresso(ingresso: IIngressos) {
    console.log('Alterar Ingresso: ', ingresso);
  }

  habilitarEdicaoHandler(item: IIngressos) {
    this.habilitarEdicao = !this.habilitarEdicao;
    this.ingressoSelecionado = item;
    if (this.habilitarEdicao) {
      this.form.get('id')?.setValue(item.id);
      this.form.get('descricao')?.setValue(item.descricao);
      this.form.get('evento')?.setValue(item.evento.id);
      this.form.get('organizador')?.setValue(item.organizador.id);
      this.form.get('qtd')?.setValue(item.qtd);
    } else {
      this.ingressoSelecionado = {} as IIngressos;
      this.form.reset();
    }
  }
}
