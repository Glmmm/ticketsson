package br.com.seguranca.server.form;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FormOrganizador {
    private Long id;
    private String nome;
    private String endereco;
    private String cep;
    private String telefone;
    private String email;
}
