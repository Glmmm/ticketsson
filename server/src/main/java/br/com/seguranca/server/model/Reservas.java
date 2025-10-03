package br.com.seguranca.server.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Reservas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer quantidade; 
    private LocalDate dataReserva;

   public Reservas(Ingresso ingresso, Usuario usuario, Integer quantidade, LocalDate dataReserva) {
        this.ingresso = ingresso;
        this.usuario = usuario;
        this.quantidade = quantidade;
        this.dataReserva = dataReserva;
    }
    
    @ManyToOne 
    @JoinColumn(name = "ingresso_id")
    private Ingresso ingresso;
    
    @ManyToOne 
    @JoinColumn(name = "usuario_id")
    private Usuario usuario; 

 
}