package br.com.seguranca.almirpapa.dto;

import br.com.seguranca.almirpapa.model.Organizador;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrganizadorDto {
    private Long id;
    private String nome;
    private String endereco;
    private String cep;
    private String telefone;
    private String email;

    public static OrganizadorDto converter(Organizador organizador) {
        return new OrganizadorDto(
                organizador.getId(),
                organizador.getNome(),
                organizador.getEndereco(),
                organizador.getCep(),
                organizador.getTelefone(),
                organizador.getEmail()
        );
    }
}
