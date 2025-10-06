package br.com.seguranca.server.repositories;

import br.com.seguranca.server.model.Reservas;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ReservasRepository extends JpaRepository<Reservas, Long> {

    List<Reservas> findByUsuarioId(Long usuarioId);
    List<Reservas> findAllByUsuario_Email(String email);
}