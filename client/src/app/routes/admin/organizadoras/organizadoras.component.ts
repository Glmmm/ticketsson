import { Component, OnInit } from '@angular/core';
import { header } from '../../../utils/table.util';
import { OrganizadorService } from '../../../services/organizador.service';
import { IOrganizador } from '../../../models/organizador.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-organizadoras',
  templateUrl: './organizadoras.component.html',
  styleUrl: './organizadoras.component.css',
  standalone: false,
})
export class OrganizadorasComponent implements OnInit {
  tableHeader = [
    new header('ID', 'id', 'arrow-down-1-9'),
    new header('Nome', 'nome', 'user-tie'),
    new header('Endereço', 'endereco', 'map-pin'),
    new header('CEP', 'cep', 'map-pin'),
    new header('Telefone', 'telefone', 'phone'),
    new header('Email', 'email', 'at'),
    new header('Ações', 'acoes', 'cog'),
  ];
  lista = [] as IOrganizador[];
  exibirFormulario: boolean = false;
  habilitarEdicao: boolean = false;
  constructor(private service: OrganizadorService) {}

  form = new FormGroup({
    id: new FormControl(),
    nome: new FormControl('', Validators.required),
    endereco: new FormControl('', Validators.required),
    cep: new FormControl('', Validators.required),
    telefone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  ngOnInit() {
    this.listarOrganizadores();
  }

  listarOrganizadores() {
    this.service.listarOrganizadores().subscribe((response) => {
      this.lista = response;
    });
  }

  cadastrarOrganizador() {
    if (this.form.valid) {
      this.service.cadastrarOrganizador(this.form.value).subscribe(() => {
        this.listarOrganizadores();
        this.form.reset();
        // console.log('Cadastrar Organizador', this.form.value);
      });
    } else {
      alert('Formulario Inválido');
    }
  }

  editarOrganizador() {
    if (this.form.valid) {
      this.service.editarOrganizador(this.form.value).subscribe(() => {
        this.listarOrganizadores();
        this.form.reset();
        // console.log('Alterar Organizador', this.form.value);
      });
    } else {
      alert('Formulário inválido');
    }
  }

  deletarOrganizador(item: IOrganizador) {
    if (confirm(`Deseja Excluir o "${item.nome}"?`)) {
      this.service.deletarOrganizador(item.id).subscribe(() => {
        this.listarOrganizadores();
        // console.log('Excluir Organizador', item);
      });
    }
  }

  habilitarEdicaoHandler(item: IOrganizador) {
    this.habilitarEdicao = !this.habilitarEdicao;
    if (this.habilitarEdicao) {
      this.form.get('id')?.setValue(item.id);
      this.form.get('nome')?.setValue(item.nome);
      this.form.get('endereco')?.setValue(item.endereco);
      this.form.get('cep')?.setValue(item.cep);
      this.form.get('telefone')?.setValue(item.telefone);
      this.form.get('email')?.setValue(item.email);
    } else {
      this.form.reset();
    }
  }
}
