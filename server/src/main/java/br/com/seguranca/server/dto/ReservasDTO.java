package br.com.seguranca.server.dto;

import java.time.LocalDate;

import br.com.seguranca.server.model.Ingresso;
import br.com.seguranca.server.model.Reservas;
import br.com.seguranca.server.model.Usuario;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReservasDTO {

    private Long id;
    private Integer quantidade;
    private LocalDate dataReserva;

    private Ingresso ingresso;
    private Usuario usuario;


    public ReservasDTO(Reservas reservas) {
        this.id = reservas.getId();
        this.quantidade = reservas.getQuantidade();
        this.dataReserva = reservas.getDataReserva();
        this.ingresso = reservas.getIngresso();
        this.usuario = reservas.getUsuario();
    }
}