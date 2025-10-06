import { Component } from '@angular/core';
import { header } from '../../../utils/table.util';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IIngressos } from '../../../models/ingressos.model';
import { IngressosService } from '../../../services/ingressos.service';

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
    new header('Quantidade Inicial', 'qtdInicial', 'ticket'),
    new header('Quantidade Atual', 'qtdAtual', 'ticket'),
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
    qtdInicial: new FormControl(0, Validators.required),
    qtdAtual: new FormControl(0, Validators.required),
  });

  ngOnInit() {
    this.listarIngressos();
  }

  listarIngressos() {
    this.service.listarIngressos().subscribe((response) => {
      this.lista = response;
    });
  }

  cadastarIngresso() {
    if (this.form.valid) {
      this.service.cadastrarIngresso(this.form.value).subscribe(() => {
        this.listarIngressos();
        this.form.reset();
      });
    } else {
      alert('Formulário inválido');
    }
  }

  editarIngresso() {
    if (this.form.valid) {
      this.service.editarIngresso(this.form.value).subscribe(() => {
        this.listarIngressos();
        this.form.reset();
      });
    } else {
      alert('Formulário inválido');
    }
  }

  deletarIngresso(item: IIngressos) {
    if (
      confirm(`Deseja Excluir "${item.descricao}" de "${item.evento.nome}"?`)
    ) {
      this.service.deletarIngresso(item.id).subscribe(() => {
        this.listarIngressos();
      });
    }
  }

  habilitarEdicaoHandler(item: IIngressos) {
    this.habilitarEdicao = !this.habilitarEdicao;
    if (this.habilitarEdicao) {
      this.form.get('id')?.setValue(item.id);
      this.form.get('descricao')?.setValue(item.descricao);
      this.form.get('evento')?.setValue(item.evento.id);
      this.form.get('organizador')?.setValue(item.organizador.id);
      this.form.get('qtdInicial')?.setValue(item.qtdInicial);
      this.form.get('qtdAtual')?.setValue(item.qtdAtual);
    } else {
      this.form.reset();
    }
  }
}
