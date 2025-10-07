import { IIngressos } from './ingressos.model';

export interface IEventosComIngressos {
  id: number;
  nome: string;
  descricao: string;
  dataInicio: string;
  dataFim: string;
  endereco: string;
  cep: string;

  ingressos: IIngressos[];
}
