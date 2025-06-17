package br.com.seguranca.almirpapa.controller;

import br.com.seguranca.almirpapa.form.FormUsuario;
import br.com.seguranca.almirpapa.service.UsuarioService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    private final UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @PostMapping("/logar")
    public ResponseEntity<Boolean> logarUsuario(@RequestBody FormUsuario formUsuario){
        return ResponseEntity.ok().body(usuarioService.logarUsuario(formUsuario));
    }
}
