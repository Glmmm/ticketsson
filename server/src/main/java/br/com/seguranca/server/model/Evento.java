package br.com.seguranca.server.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Evento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String descricao;
    private LocalDate dataInicio;
    private LocalDate dataFim;
    private String endereco;
    private String cep;



    public Evento(String nome,
                  String descricao,
                  LocalDate dataInicio,
                  LocalDate dataFim,
                  String endereco,
                  String cep,
                  Organizador organizador) {
        this.nome = nome;
        this.descricao = descricao;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.endereco = endereco;
        this.cep = cep;
        this.organizador = organizador;
    }

    @ManyToOne
    @JoinColumn(name = "organizador_id")
    private Organizador organizador;
}
