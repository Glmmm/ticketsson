import { IIngressos } from '../ingressos.model';
import { Eventos } from './eventos.mock';
import { Organizadores } from './organizadores.mock';
const eventos = Eventos;
const organizadores = Organizadores;
export const Ingressos: IIngressos[] = [
  {
    id: 301,
    descricao: 'Ingresso Inteiro',
    qtdInicial: 2,
    qtdAtual: 2,
    evento: eventos[0],
    organizador: organizadores[0],
  },
  {
    id: 302,
    qtdInicial: 1,
    qtdAtual: 1,
    descricao: 'Ingresso Vip',
    evento: eventos[1],
    organizador: organizadores[1],
  },
  {
    id: 303,
    qtdInicial: 3,
    qtdAtual: 3,
    descricao: 'Ingresso Meia',
    evento: eventos[2],
    organizador: organizadores[2],
  },
  {
    id: 304,
    qtdInicial: 5,
    qtdAtual: 5,
    descricao: 'Ingresso Rogers',
    evento: eventos[3],
    organizador: organizadores[3],
  },
  {
    id: 305,
    qtdInicial: 1,
    qtdAtual: 1,
    descricao: 'Ingresso',
    evento: eventos[4],
    organizador: organizadores[4],
  },
];
