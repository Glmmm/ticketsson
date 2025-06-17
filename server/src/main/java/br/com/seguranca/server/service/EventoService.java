package br.com.seguranca.almirpapa.service;

import br.com.seguranca.almirpapa.dto.EventoDto;
import br.com.seguranca.almirpapa.form.FormEvento;
import br.com.seguranca.almirpapa.model.Evento;
import br.com.seguranca.almirpapa.model.Organizador;
import br.com.seguranca.almirpapa.repositories.EventoRepository;
import br.com.seguranca.almirpapa.repositories.IngressoRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

@Service
public class EventoService {

    private final EventoRepository eventoRepository;
    private final OrganizadorService organizadorService;
    private final IngressoRepository ingressoRepository;

    public EventoService(EventoRepository eventoRepository, OrganizadorService organizadorService, IngressoRepository ingressoRepository) {
        this.eventoRepository = eventoRepository;
        this.organizadorService = organizadorService;
        this.ingressoRepository = ingressoRepository;
    }

    public List<EventoDto> listarEventos() {
        List<Evento> eventos = eventoRepository.findAll();
        return eventos.stream().map(EventoDto::converter).toList();
    }

    public ResponseEntity<?> cadastrarNovoEvento(FormEvento evento) {
        Organizador organizador = organizadorService.buscarOrganizadorPorId(evento.getOrganizador());
        Evento novoEvento = new Evento(
                evento.getNome(),
                evento.getDescricao(),
                evento.getDataInicio(),
                evento.getDataFim(),
                evento.getEndereco(),
                evento.getCep(),
                organizador
        );
        eventoRepository.save(novoEvento);
        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(novoEvento.getId())
                .toUri();
        return ResponseEntity.created(location).body(novoEvento);
    }

    public EventoDto editarEvento(FormEvento dados) {
        Evento evento = eventoRepository.findById(dados.getId()).orElseThrow(() -> new RuntimeException("Evento não encontrado com ID " + dados.getId()));
        Organizador organizador = organizadorService.buscarOrganizadorPorId(dados.getOrganizador());
        evento.setNome(dados.getNome());
        evento.setDescricao(dados.getDescricao());
        evento.setDataInicio(dados.getDataInicio());
        evento.setDataFim(dados.getDataFim());
        evento.setEndereco(dados.getEndereco());
        evento.setCep(dados.getCep());
        evento.setOrganizador(organizador);
        evento = eventoRepository.save(evento);
        return EventoDto.converter(evento);
    }

    public EventoDto deletarEvento(Long id) {
        Evento evento = eventoRepository.findById(id).orElseThrow(() -> new RuntimeException("Evento não encontrado com ID " + id));
        ingressoRepository.deletarPorEventoId(id);
        eventoRepository.delete(evento);
        return EventoDto.converter(evento);
    }

}
