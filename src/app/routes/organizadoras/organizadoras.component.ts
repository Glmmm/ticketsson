import { Component, OnInit } from '@angular/core';
import { header } from '../../utils/table.util';
import { OrganizadorService } from '../../services/organizador.service';
import { IOrganizador } from '../../models/organizador.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-organizadoras',
  templateUrl: './organizadoras.component.html',
  styleUrl: './organizadoras.component.css',
  standalone: false,
})
export class OrganizadorasComponent implements OnInit {
  tableHeader = [
    new header('ID', 'id', ''),
    new header('Nome', 'nome', ''),
    new header('Endereço', 'endereco', 'map-pin'),
    new header('CEP', 'cep', 'map-pin'),
    new header('Telefone', 'telefone', 'phone'),
    new header('Email', 'email', 'at'),
  ];
  lista = [] as IOrganizador[];
  exibirFormulario: boolean = false;
  constructor(private service: OrganizadorService) {}

  form = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(),
    endereco: new FormControl(),
    cep: new FormControl(),
    telefone: new FormControl(),
    email: new FormControl('', Validators.email),
  });

  ngOnInit() {
    this.listarOrganizadores();
  }

  listarOrganizadores() {
    this.service.listarOrganizadores().subscribe((response) => {
      this.lista = response;
    });
  }

  cadastrarOrganizador() {}

  changeExibirFormulario() {
    this.exibirFormulario = !this.exibirFormulario;
  }
}
