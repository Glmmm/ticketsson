import { IIngressos } from './ingressos.model';
import { IUsuario } from './usuario.model';

export interface IReservas {
  id: number;
  quantidade: number;
  dataReserva: string;
  ingresso: IIngressos;
  usuario: IUsuario;
}
