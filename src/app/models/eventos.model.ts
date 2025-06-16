import { IOrganizador } from './organizador.model';

export interface IEventos {
  id: number;
  nome: string;
  descricao: string;
  dataInicio: string;
  dataFim: string;
  endereco: string;
  cep: string;
  organizador: IOrganizador;
}
