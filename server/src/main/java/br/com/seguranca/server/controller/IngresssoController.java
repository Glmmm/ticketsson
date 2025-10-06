package br.com.seguranca.server.controller;

import br.com.seguranca.server.dto.IngressoDto;
import br.com.seguranca.server.form.FormIngresso;
import br.com.seguranca.server.service.IngressoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ingresso")
public class IngresssoController {

    private final IngressoService ingressoService;

    public IngresssoController(IngressoService ingressoService) {
        this.ingressoService = ingressoService;
    }

    @GetMapping("/listar-ingressos")
    public ResponseEntity<List<IngressoDto>> listarIngressos() {
        return ResponseEntity.ok().body(ingressoService.listarIngressos());
    }

    @PostMapping("/cadastrar-ingresso")
    public ResponseEntity<?> cadastrarIngresso(@RequestBody FormIngresso formIngresso) {
        return ingressoService.adicionarIngresso(formIngresso);
    }

    @PutMapping("/editar-ingresso")
    public ResponseEntity<IngressoDto> editarIngresso(@RequestBody FormIngresso formIngresso) {
        return ResponseEntity.ok().body(ingressoService.alterarIngresso(formIngresso));
    }

    @DeleteMapping("/deletar-ingresso/{idIngresso}")
    public ResponseEntity<IngressoDto> excluiIngresso(@PathVariable Long idIngresso) {
        return ResponseEntity.ok().body(ingressoService.deletarIngresso(idIngresso));
    }
}
