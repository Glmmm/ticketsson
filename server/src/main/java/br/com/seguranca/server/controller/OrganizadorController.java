package br.com.seguranca.server.controller;

import br.com.seguranca.server.dto.OrganizadorDto;
import br.com.seguranca.server.form.FormOrganizador;
import br.com.seguranca.server.service.OrganizadorService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/organizador")
public class OrganizadorController {

    private final OrganizadorService organizadorService;

    public OrganizadorController(OrganizadorService organizadorService) {
        this.organizadorService = organizadorService;
    }

    @GetMapping("/listar-organizadores")
    public ResponseEntity<List<OrganizadorDto>> listarOrganizadores(){
        return ResponseEntity.ok().body(organizadorService.listarOrganizadores());
    }

    @PostMapping("/cadastrar-organizador")
    public ResponseEntity<OrganizadorDto> cadastrarNovoOrganizador(@RequestBody FormOrganizador dados){
        return ResponseEntity.ok().body(organizadorService.cadastrarOrganizador(dados));
    }

    @PutMapping("/editar-organizador")
    public ResponseEntity<OrganizadorDto> editarOrganizador(@RequestBody FormOrganizador dados){
        return ResponseEntity.ok().body(organizadorService.editarOrganizadores(dados));
    }

    @DeleteMapping("/deletar-organizador/{idOrganizador}")
    public ResponseEntity<OrganizadorDto> cadastrarNovoOrganizador(@PathVariable Long idOrganizador){
        return ResponseEntity.ok().body(organizadorService.deletarOrganizador(idOrganizador));
    }
}
