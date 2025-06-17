import { IEventos } from './eventos.model';
import { IOrganizador } from './organizador.model';

export interface IIngressos {
  id: number;
  descricao: string;
  qtd: number;
  evento: IEventos;
  organizador: IOrganizador;
}
