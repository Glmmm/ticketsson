package br.com.seguranca.server.controller;

import br.com.seguranca.server.dto.EventoComIngressosDTO;
import br.com.seguranca.server.dto.EventoDto;
import br.com.seguranca.server.form.FormEvento;
import br.com.seguranca.server.service.EventoService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/eventos")
public class EventoController {

    private final EventoService eventoService;

    public EventoController(EventoService eventoService) {
        this.eventoService = eventoService;
    }

    @GetMapping("/listar-eventos")
    public ResponseEntity<List<EventoDto>> listar() {
        return ResponseEntity.ok().body(eventoService.listarEventos());
    }

      @GetMapping("/com-ingressos")
    public ResponseEntity<List<EventoComIngressosDTO>> listarComIngressos() {
        List<EventoComIngressosDTO> eventosComIngressos = eventoService.listarEventosComIngressos();
        return ResponseEntity.ok(eventosComIngressos);
    }

    @PostMapping("/cadastrar-evento")
    public ResponseEntity<?> cadastrarEvento(@RequestBody FormEvento evento) {
        return eventoService.cadastrarNovoEvento(evento);
    }

    @PutMapping(value = "/editar-evento", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<EventoDto> editarEvento(@RequestBody FormEvento evento) {
        return ResponseEntity.ok().body(eventoService.editarEvento(evento));
    }

    @DeleteMapping("/deletar-evento/{idEvento}")
    public ResponseEntity<EventoDto> deletarEvento(@PathVariable Long idEvento) {
        return ResponseEntity.ok().body(eventoService.deletarEvento(idEvento));
    }
}
