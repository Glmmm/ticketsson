package br.com.seguranca.almirpapa.dto;

import br.com.seguranca.almirpapa.model.Evento;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EventoDto {

    private Long id;
    private String nome;
    private String descricao;
    private LocalDate dataInicio;
    private LocalDate dataFim;
    private String endereco;
    private String cep;

    public static EventoDto converter(Evento evento) {
        return new EventoDto(
                evento.getId(),
                evento.getNome(),
                evento.getDescricao(),
                evento.getDataInicio(),
                evento.getDataFim(),
                evento.getEndereco(),
                evento.getCep()
        );
    }
}
