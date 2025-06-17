package br.com.seguranca.almirpapa.repositories;

import br.com.seguranca.almirpapa.model.Organizador;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface OrganizadorRepository extends JpaRepository<Organizador, Long> {
    boolean existsByEmail(String email);
}
