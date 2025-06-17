package br.com.seguranca.almirpapa.repositories;

import br.com.seguranca.almirpapa.model.Ingresso;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IngressoRepository extends JpaRepository<Ingresso, Long> {

    @Modifying
    @Transactional
    @Query("DELETE FROM Ingresso i WHERE i.evento.id = :eventoId")
    void deletarPorEventoId(@Param("eventoId") Long eventoId);

    @Modifying
    @Transactional
    @Query("DELETE FROM Ingresso i WHERE i.evento.organizador.id = :organizadorId")
    void deletarIngressosPorOrganizadorId(@Param("organizadorId") Long organizadorId);
}
