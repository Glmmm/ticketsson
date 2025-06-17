package br.com.seguranca.almirpapa.service;

import br.com.seguranca.almirpapa.dto.IngressoDto;
import br.com.seguranca.almirpapa.form.FormIngresso;
import br.com.seguranca.almirpapa.model.Evento;
import br.com.seguranca.almirpapa.model.Ingresso;
import br.com.seguranca.almirpapa.model.Organizador;
import br.com.seguranca.almirpapa.repositories.EventoRepository;
import br.com.seguranca.almirpapa.repositories.IngressoRepository;
import br.com.seguranca.almirpapa.repositories.OrganizadorRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.function.Function;

@Service
public class IngressoService {

    private final IngressoRepository ingressoRepository;
    private final OrganizadorRepository organizadorRepository;
    private final EventoRepository eventoRepository;

    public IngressoService(IngressoRepository ingressoRepository, OrganizadorRepository organizadorRepository, EventoRepository eventoRepository) {
        this.ingressoRepository = ingressoRepository;
        this.organizadorRepository = organizadorRepository;
        this.eventoRepository = eventoRepository;
    }

    public List<IngressoDto> listarIngressos() {
        List<Ingresso> ingressos = ingressoRepository.findAll();
        return ingressos.stream().map(IngressoDto::converter).toList();
    }

    public Ingresso buscarIngressoPorId(Long id) {
        return ingressoRepository.findById(id).orElseThrow(() -> new RuntimeException("Ingresso não encontrado com o ID: " + id));
    }

    public Organizador buscarOrganizadorPorId(Long id) {
        return organizadorRepository.findById(id).orElseThrow(() -> new RuntimeException("Organizador não encontrado com o ID: " + id));
    }

    public Evento buscarEventoPorId(Long id) {
        return eventoRepository.findById(id).orElseThrow(() -> new RuntimeException("Evento não encontrado com o ID: " + id));
    }

    public ResponseEntity<?> adicionarIngresso(FormIngresso dados) {
        Ingresso ingresso = new Ingresso();
        Organizador organizador = buscarOrganizadorPorId(dados.getOrganizador());
        Evento evento = buscarEventoPorId(dados.getEvento());
        ingresso.setDescricao(dados.getDescricao());
        ingresso.setEvento(evento);
        ingresso.setOrganizador(organizador);
        ingresso.setQtd(dados.getQtd());
        ingresso = ingressoRepository.save(ingresso);
        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(ingresso.getId())
                .toUri();
        return ResponseEntity.created(location).body(ingresso);
    }

    public IngressoDto alterarIngresso(FormIngresso dados) {
        Ingresso ingresso = buscarIngressoPorId(dados.getId());
        Organizador organizador = buscarOrganizadorPorId(dados.getOrganizador());
        Evento evento = buscarEventoPorId(dados.getEvento());
        ingresso.setDescricao(dados.getDescricao());
        ingresso.setEvento(evento);
        ingresso.setOrganizador(organizador);
        ingresso.setQtd(dados.getQtd());
        ingresso = ingressoRepository.save(ingresso);
        return IngressoDto.converter(ingresso);
    }

    public IngressoDto deletarIngresso(Long id) {
        Ingresso ingresso = buscarIngressoPorId(id);
        ingressoRepository.delete(ingresso);
        return IngressoDto.converter(ingresso);
    }
}
