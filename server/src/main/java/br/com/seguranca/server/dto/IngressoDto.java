package br.com.seguranca.server.dto;

import br.com.seguranca.server.model.Evento;
import br.com.seguranca.server.model.Ingresso;
import br.com.seguranca.server.model.Organizador;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class IngressoDto {

    private Long id;
    private String descricao;
    private int qtdInicial;
    private int qtdAtual;
    private Evento evento;
    private Organizador organizador;

    public static IngressoDto converter(Ingresso ingresso) {
        return new IngressoDto(
                ingresso.getId(),
                ingresso.getDescricao(),
                ingresso.getQtdInicial(),
                ingresso.getQtdAtual(),
                ingresso.getEvento(),
                ingresso.getOrganizador()
        );
    }
}
