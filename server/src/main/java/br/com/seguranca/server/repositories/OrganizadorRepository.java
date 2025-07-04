package br.com.seguranca.server.repositories;

import br.com.seguranca.server.model.Organizador;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface OrganizadorRepository extends JpaRepository<Organizador, Long> {
    boolean existsByEmail(String email);
}
