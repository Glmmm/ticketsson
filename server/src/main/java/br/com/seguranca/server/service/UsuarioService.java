package br.com.seguranca.server.service;

import br.com.seguranca.server.form.FormUsuario;
import br.com.seguranca.server.model.Usuario;
import br.com.seguranca.server.repositories.UsuarioRepository;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public boolean logarUsuario(FormUsuario dados) {
        Usuario usuario = usuarioRepository.findByEmail(dados.getEmail()).orElse(new Usuario());
        return usuario.getEmail() != null && usuario.getSenha().equals(dados.getSenha());
    }
}
