package br.com.seguranca.almirpapa.service;

import br.com.seguranca.almirpapa.form.FormUsuario;
import br.com.seguranca.almirpapa.model.Usuario;
import br.com.seguranca.almirpapa.repositories.UsuarioRepository;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public boolean logarUsuario(FormUsuario dados) {
        Usuario usuario = usuarioRepository.findByEmail(dados.getEmail()).orElseThrow(() -> new RuntimeException("Usuário não encontrado com o Email: " + dados.getEmail()));
        return usuario.getSenha().equals(dados.getSenha());
    }
}
