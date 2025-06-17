package br.com.seguranca.almirpapa.repositories;

import br.com.seguranca.almirpapa.model.Evento;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface EventoRepository extends JpaRepository<Evento, Long> {
    @Modifying
    @Transactional
    @Query("DELETE FROM Evento e WHERE e.organizador.id = :organizadorId")
    void deletarPorOrganizadorId(@Param("organizadorId") Long organizadorId);
}
