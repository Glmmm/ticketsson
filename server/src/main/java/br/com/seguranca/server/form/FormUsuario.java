package br.com.seguranca.server.form;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FormUsuario {
    private String email;
    private String senha;
}
