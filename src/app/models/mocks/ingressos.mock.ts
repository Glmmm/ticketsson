import { IIngressos } from '../ingressos.model';
import { Eventos } from './eventos.mock';
import { Organizadores } from './organizadores.mock';
const eventos = Eventos;
const organizadores = Organizadores;
export const Ingressos: IIngressos[] = [
  {
    id: 301,
    qtd: 2,
    evento: eventos[0],
    organizador: organizadores[0],
  },
  {
    id: 302,
    qtd: 1,
    evento: eventos[1],
    organizador: organizadores[1],
  },
  {
    id: 303,
    qtd: 3,
    evento: eventos[2],
    organizador: organizadores[2],
  },
  {
    id: 304,
    qtd: 5,
    evento: eventos[3],
    organizador: organizadores[3],
  },
  {
    id: 305,
    qtd: 1,
    evento: eventos[4],
    organizador: organizadores[4],
  },
];
