package br.com.seguranca.server.dto;

import java.time.LocalDate;
import java.util.List;

import br.com.seguranca.server.model.Evento;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EventoComIngressosDTO {
    private Long id;
    private String nome;
    private String descricao;
    private LocalDate dataInicio;
    private LocalDate dataFim;
    private String endereco;
    private String cep;
    
    private List<IngressoDto> ingressos;

    public EventoComIngressosDTO(Evento evento, List<IngressoDto> ingressos) {
        this.id = evento.getId();
        this.nome = evento.getNome();
        this.descricao = evento.getDescricao();
        this.dataInicio = evento.getDataInicio();
        this.dataFim = evento.getDataFim();
        this.endereco = evento.getEndereco();
        this.cep = evento.getCep();
        this.ingressos = ingressos;
    }
}
