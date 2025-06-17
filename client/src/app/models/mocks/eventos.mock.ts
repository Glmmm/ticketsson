import { IEventos } from '../eventos.model';
import { Organizadores } from './organizadores.mock';
const organizadores = Organizadores;
export const Eventos: IEventos[] = [
  {
    id: 101,
    nome: 'Festival de Inovação Digital 2025',
    descricao: 'Uma imersão no futuro da tecnologia com palestras e workshops interativos.',
    dataInicio: '2025-10-10',
    dataFim: '2025-10-12',
    endereco: 'Centro de Convenções ExpoTech, São Paulo - SP',
    cep: '01234-567',

    organizador: organizadores[0],
  },
  {
    id: 102,
    nome: 'Maratona Cultural de Verão',
    descricao: 'Celebração da arte e cultura local com shows, teatro e exposições ao ar livre.',
    dataInicio: '2025-11-20',
    dataFim: '2025-11-23',
    endereco: 'Parque Municipal das Artes, Rio de Janeiro - RJ',
    cep: '01234-567',
    organizador: organizadores[1],
  },
  {
    id: 103,
    nome: 'Conferência Internacional de Sustentabilidade',
    descricao: 'Debates sobre soluções ambientais e desenvolvimento sustentável para um futuro melhor.',
    dataInicio: '2026-03-05',
    dataFim: '2026-03-07',
    cep: '01234-567',
    endereco: 'Auditório Verde, Brasília - DF',
    organizador: organizadores[2],
  },
  {
    id: 104,
    nome: 'Feira de Gastronomia Regional',
    descricao: 'Degustação e venda de produtos típicos da culinária mineira, com chefs renomados.',
    dataInicio: '2026-04-18',
    dataFim: '2026-04-20',
    cep: '01234-567',
    endereco: 'Expominas, Belo Horizonte - MG',
    organizador: organizadores[3],
  },
  {
    id: 105,
    nome: 'Workshop de Fotografia Noturna',
    descricao: 'Aprenda técnicas avançadas de fotografia em ambientes com pouca luz.',
    dataInicio: '2025-12-01',
    dataFim: '2025-12-01',
    cep: '01234-567',
    endereco: 'Estúdio Criativo Lumiar, Porto Alegre - RS',
    organizador: organizadores[4],
  },
];
