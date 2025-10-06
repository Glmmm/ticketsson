package br.com.seguranca.server.form;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FormIngresso {
    private Long id;
    private String descricao;
    private Long evento;
    private Long organizador;
    private int qtdInicial;
    private int qtdAtual;
}
