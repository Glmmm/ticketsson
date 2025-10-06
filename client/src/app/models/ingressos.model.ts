import { IEventos } from './eventos.model';
import { IOrganizador } from './organizador.model';

export interface IIngressos {
  id: number;
  descricao: string;
  qtdInicial: number;
  qtdAtual: number;
  evento: IEventos;
  organizador: IOrganizador;
}
