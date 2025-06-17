import { Component } from '@angular/core';
import { header } from '../../utils/table.util';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    new header('Ações', 'acoes', 'cog'),
  ];
  exibirFormulario: boolean = false;
  habilitarEdicao: boolean = false;
  lista = [] as IIngressos[];
  constructor(private service: IngressosService) {}

  form = new FormGroup({
    id: new FormControl(),
    descricao: new FormControl('', Validators.required),
    evento: new FormControl(0, Validators.required),
    organizador: new FormControl(0, Validators.required),
    qtd: new FormControl(0, Validators.required),
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

  alterarIngresso() {
    console.log('Alterar Ingresso: ', this.form.value);
  }

  excluirIngresso(item: IIngressos) {
    if (confirm(`Deseja Excluir "${item.descricao}" de "${item.evento.nome}"?`)) {
      console.log('Excluir ingresso', item.id);
    }
  }

  habilitarEdicaoHandler(item: IIngressos) {
    this.habilitarEdicao = !this.habilitarEdicao;
    if (this.habilitarEdicao) {
      this.form.get('id')?.setValue(item.id);
      this.form.get('descricao')?.setValue(item.descricao);
      this.form.get('evento')?.setValue(item.evento.id);
      this.form.get('organizador')?.setValue(item.organizador.id);
      this.form.get('qtd')?.setValue(item.qtd);
    } else {
      this.form.reset();
    }
  }
}
