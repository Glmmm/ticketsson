import { IEventos } from './eventos.model';
import { IOrganizador } from './organizador.model';

export interface IIngressos {
  id: number;
  qtd: number;
  evento: IEventos;
  organizador: IOrganizador;
}
