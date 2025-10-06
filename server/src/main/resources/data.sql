-- ORGANIZADORES
INSERT INTO organizador (id, nome, endereco, cep, telefone, email)
VALUES (201, 'TechFuture Eventos', 'Av. Paulista, 1000 - São Paulo - SP', '01310-100', '(11) 99999-0001',
        'contato@techfuture.com.br'),
       (202, 'Cultura Ativa', 'Rua das Laranjeiras, 456 - Rio de Janeiro - RJ', '22240-003', '(21) 98888-0002',
        'eventos@culturaativa.org.br'),
       (203, 'VerdeVivo Sustentável', 'Esplanada dos Ministérios, Brasília - DF', '70000-000', '(61) 99876-0003',
        'contato@verdevivo.eco'),
       (204, 'Sabores de Minas', 'Rua da Bahia, 1234 - Belo Horizonte - MG', '30160-011', '(31) 98765-0004',
        'gastronomia@saboresmg.com.br'),
       (205, 'FotoArt Produções', 'Av. Ipiranga, 6789 - Porto Alegre - RS', '90160-100', '(51) 98456-0005',
        'contato@fotoart.com');

-- EVENTOS
INSERT INTO evento (id, nome, descricao, data_inicio, data_fim, endereco, cep, organizador_id)
VALUES (101, 'Festival de Inovação Digital 2025',
        'Uma imersão no futuro da tecnologia com palestras e workshops interativos.', '2025-10-10', '2025-10-12',
        'Centro de Convenções ExpoTech, São Paulo - SP', '01234-567', 201),
       (102, 'Maratona Cultural de Verão',
        'Celebração da arte e cultura local com shows, teatro e exposições ao ar livre.', '2025-11-20', '2025-11-23',
        'Parque Municipal das Artes, Rio de Janeiro - RJ', '01234-567', 202),
       (103, 'Conferência Internacional de Sustentabilidade',
        'Debates sobre soluções ambientais e desenvolvimento sustentável para um futuro melhor.', '2026-03-05',
        '2026-03-07', 'Auditório Verde, Brasília - DF', '01234-567', 203),
       (104, 'Feira de Gastronomia Regional',
        'Degustação e venda de produtos típicos da culinária mineira, com chefs renomados.', '2026-04-18', '2026-04-20',
        'Expominas, Belo Horizonte - MG', '01234-567', 204),
       (105, 'Workshop de Fotografia Noturna', 'Aprenda técnicas avançadas de fotografia em ambientes com pouca luz.',
        '2025-12-01', '2025-12-01', 'Estúdio Criativo Lumiar, Porto Alegre - RS', '01234-567', 205);

-- INGRESSOS
INSERT INTO ingresso (id, descricao, qtd_inicial, qtd_atual, evento_id, organizador_id)
VALUES (301, 'Ingresso Inteiro', 50, 30, 101, 201),
       (302, 'Ingresso Vip', 50, 20, 102, 202),
       (303, 'Ingresso Meia', 50, 40, 103, 203),
       (304, 'Ingresso Rogers', 50, 10, 104, 204);

-- USUARIOS
INSERT INTO usuario (id, nome, email, senha)
VALUES (1, 'Rogerio Rei', 'teste@gmail.com', '123')